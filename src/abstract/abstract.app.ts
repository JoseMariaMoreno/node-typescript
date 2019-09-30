/**
 * This is the entry point for the app
 */

import express = require('express');
import helpers = require('../helpers/helpers');
import { configure, getLogger, Log4js } from 'log4js';
import { IAppOptions } from './app-options.interface';
import mongoose = require('mongoose');
import bodyParser = require( 'body-parser' );
import { threadId } from 'worker_threads';

/**
 * The Main Class
 * @type {string} id Unique id for the app
 * @type {string} description An app funcionality description
 */
export class AbstractApp {

  public id: string;
  public description: string;
  private express: express.Application;
  public options: IAppOptions;
  public _logger: any;
  public _router: express.Router;

  /**
   * App constructor
   * @param {string} id Unique id for the app
   * @param {string} description An app funcionality description
   * @type {IAppOptions} options
   */
  constructor(id: string, description: string, options?: IAppOptions) {
    this.id = id;
    this.description = description;
    this.express = express();
    this.options = options || {};
    this._router = express.Router();

    // Logger
    this._logger = getLogger();
    this._logger.level = 'trace';
    this._logger.trace('App constructor');

  }

  /**
   * Returns the server URL
   */
  getServer(): string {
    return process.env.SERVER || 'http://127.0.0.1';
  }

  /**
   * Return de web server port
   */
  getPort(): string {
    return process.env.PORT || '3333';
  }

  /**
   * Returns the api base path /api + api version
   */
  getBasePath(): string {
    return process.env.BASE_PATH || '/api/1';
  }

  getURL(): string {
    return this.getServer() + ':' + this.getPort() + this.getBasePath();
  }

  /**
   * This method initialize routes and start server
   */
  init(): Promise<void> {
    const self = this;
    return new Promise((resolve, reject) => {

      try {

        self.express.use(bodyParser.urlencoded({ extended: false }));
        self.express.use(bodyParser.json());


        // Route for root api
        self.getRouter().get('/', (req, res) => {
          res.send(helpers.hello());
        });

        self.express.use( '/api/1', self.getRouter() );

        // Start server
        self.express.listen(self.getPort(), () => {
          resolve();
        });

        self.initDatabase().then( dbMessage => {

          self.logTrace( 'App initalized in', self.getURL(), dbMessage );

          resolve();
        }).catch( reject );

      } catch (error) {
        reject(error)
      }


    });



  }

  getRouter(): express.Router {
    return this._router;
  }

  /**
   * This method open a database connection
   */
  initDatabase(): Promise<string> {
    const self = this;
    return new Promise( ( resolve, reject ) => {
      try {
        const dbURI = process.env.DB_URI;
        // self.logTrace( 'DB URI: ', dbURI );
        if ( dbURI ) {
          mongoose.connect( dbURI, {useNewUrlParser: true, useUnifiedTopology: true }).then( db => {
            self.logTrace( 'Database connected' );
            resolve('Database initialized');
          }).catch( error => reject( error ) );
        } else {
          resolve( 'No database settings' );
        }
      } catch( error ) {
        reject( error );
      }
    });
  }

  /**
   * This method returns the app name
   */
  getName(): string {
    return this.id + ' - ' + this.description;
  }

  /**
   * This method returns the logger module
   */
  getLogger(): any {
    return this._logger;
  }

  /**
   * This function creates a system trace level log
   * @param param One or more string, numbers, or object to be logged
   */
  logTrace(...param: any): void {
    this.getLogger().trace(...param);
  }

  /**
   * This function creates a system debug level log
   * @param param One or more string, numbers, or object to be logged
   */
  logDebug(...param: any): void {
    this.getLogger().debug(...param);
  }

  /**
   * This function creates a system info level log
   * @param param One or more string, numbers, or object to be logged
   */
  logInfo(...param: any): void {
    this.getLogger().info(...param);
  }

  /**
   * This function creates a system warning level log
   * @param param One or more string, numbers, or object to be logged
   */
  logWarn(...param: any): void {
    this.getLogger().warn(...param);
  }

  /**
   * This function creates a system error level log
   * @param param One or more string, numbers, or object to be logged
   */
  logError(...param: any): void {
    this.getLogger().error(...param);
  }



}


