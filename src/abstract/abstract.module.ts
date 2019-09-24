const express = require( 'express' );
/**
 * Abstract module to be overrided for custom app functionalities
 */
export class AbstractModule {
  
  private _parent: any;
  public id: string = '';  
  public _router: any;
  public _path: string = '/';

  /**
   * This class should be override for each module you can implement
   * @param {any} parent Parent module or main app 
   */
  constructor( id: string, parent: any ) {
    this.id = id;
    this._parent = parent;
    this.logInfo( 'Module constructor' );
  }

  /**
   * Returns the RESTful relative path
   */
  getPath(): string {
    return this._path;
  }

  /**
   * This method creates an Express Router
   */
  createRouter(): void {
    this._router = express.Router();
    this._router.get( this.getPath(), ( req: any, res: any ) => {
      res.send( this.id );
    });
    this.getParent().express.use( this._router );
  }

  /**
   * This function returns the parent object (App or another module)
   */
  getParent(): any {
    return this._parent;
  }

  /**
   * This method returns the logger module
   */
  getLogger(): any {
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



}