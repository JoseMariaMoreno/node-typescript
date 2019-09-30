import { AbstractModule } from '../abstract/abstract.module';
import SettingsModel, { ISettings } from './settings.model';
import { App } from '../app';
import express = require('express');
import { Settings } from 'http2';
import * as _ from 'lodash';
import * as helpers from '../helpers/helpers';

/**
 * Settings module
 * @param {string} path Path form RESTful API
 */
export class SettingsModule extends AbstractModule {

  public _path: string = '/settings';

  constructor( parent: App ) {
    super( 'settings', parent );

    this.createRoutes();
  }

  createRoutes(): void {
    const self = this;

    self.createRouter();

    // GET
    self.getRouter().get( this.getPath(), ( req: express.Request, res: express.Response ) => {
      self.getSettings( req ).then( ( settings: ISettings[] ) => {
        res.send( settings );
      }).catch( error => self.sendError( req, res, error ) );
    });

    // POST
    this.getRouter().post( this.getPath(), ( req: express.Request, res: express.Response ) => {
      self.newSettings( req ).then( ( settings: ISettings ) => {
        self.sendResponse( req, res, settings );
      }).catch( error => self.sendError( req, res, error ) );
    });


  }

  /**
   * Return account settings
   * @param req
   */
  getSettings( req: object ): Promise<ISettings[]> {
    const self = this;
    return new Promise( ( resolve, reject ) => {
      SettingsModel.find().then( ( settings: ISettings[] ) => {
        resolve( settings );
      })

    });
  }

  /**
   * Create a new account settings
   * @param {express.Request} req
   */
  newSettings( req: object ): Promise<ISettings> {
    const self = this;
    return new Promise( ( resolve, reject ) => {

      var dataToInsert: ISettings = _.get( req, 'body', null );

      if ( dataToInsert ) {

      SettingsModel.create( dataToInsert ).then( data => resolve( data ) ).catch( error => reject( error ) );
      } else {
        reject( helpers.errorObject( 'no_data_to_insert' ) )
      }

    });
  }

}