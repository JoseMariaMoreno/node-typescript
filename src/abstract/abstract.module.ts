import { AbstractApp } from '../abstract/abstract.app';
import express = require('express');
import { Log4js } from 'log4js';
/**
 * Abstract module to be overrided for custom app functionalities
 * @type {AbstractApp} parent Parent App or Module
 */
export class AbstractModule {
  
  private _parent: AbstractApp;
  public id: string = '';  
  public _router: express.Router;
  public _path: string = '/';

  /**
   * This class should be override for each module you can implement
   * @param {AbstractApp} parent Parent module or main app 
   */
  constructor( id: string, parent: AbstractApp ) {
    this.id = id;
    this._parent = parent;
    this._router = express.Router();
    this.logInfo( 'Module constructor' );
  }

  /**
   * Returns the RESTful relative path
   */
  getPath(): string {
    return this._path;
  }

  /**
   * This method returns this module express router
   */
  getRouter(): express.Router {
    return this._router;
  }

  /**
   * This method creates an Express Router and attach to parent router
   */
  createRouter(): void {
    this.getParent().getRouter().use( this.getRouter() );
  }

  /**
   * This function returns the parent object (App or another module)
   */
  getParent(): AbstractApp {
    return this._parent;
  }

  /**
   * This method returns the logger module
   */
  getLogger(): Log4js {
    return this.getParent().getLogger();
  }

  /**
   * This function creates a system trace level log
   * @param param One or more string, numbers, or object to be logged
   */
  logTrace( ...params: any ): void {
    this.getParent().logTrace( this.id + ':', ...params );
  }

  /**
   * This function creates a system debug level log
   * @param param One or more string, numbers, or object to be logged
   */
  logDebug( ...params: any ): void {
    this.getParent().logDebug( this.id + ':', ...params );
  }
  
  /**
   * This function creates a system info level log
   * @param param One or more string, numbers, or object to be logged
   */
  logInfo( ...params: any ): void {
    this.getParent().logInfo( this.id + ':', ...params );
  }
  
  /**
   * This function creates a system warning level log
   * @param param One or more string, numbers, or object to be logged
   */
  logWarn( ...params: any ): void {
    this.getParent().logWarn( this.id + ':', ...params );
  }
  
  /**
   * This function creates a system error level log
   * @param param One or more string, numbers, or object to be logged
   */
  logError( ...params: any ): void {
    this.getParent().logError( this.id + ':', ...params );
  }


  /**
   * This method send a 400 status error
   * @param req 
   * @param res 
   * @param {any} error 
   */
  sendError( req: express.Request, res: express.Response, error: any ): void {
    res.status( 400 );
    res.send( error );
  }
  /**
   * This method send a 200 status and correct data
   * @param req 
   * @param res 
   * @param {any} data 
   */
  sendResponse( req: express.Request, res: express.Response, data: any ): void {
    res.status( 200 );
    res.send( data );
  }



}