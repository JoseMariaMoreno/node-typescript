import { AbstractModule } from '../abstract/abstract.module';
import SettingsModel, { ISettings } from './settings.model';
import { App } from '../app';
import express = require('express');
import { Settings } from 'http2';

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

    // GET Path
    self.getRouter().get( this.getPath(), ( req: express.Request, res: express.Response ) => {
      self.getSettings( req ).then( ( settings: ISettings ) => {
        res.send( settings );
      }).catch( error => self.sendError( req, res, error ) );
    });

    // POST Path
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
  getSettings( req: object ): Promise<object> {
    const self = this;
    return new Promise( ( resolve, reject ) => {
      SettingsModel.find().then( result => {
        resolve( result );
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
      
      SettingsModel.create( req.body ).then( data => resolve( data ) ).catch( error => reject( error ) );
      
    });
  }

}