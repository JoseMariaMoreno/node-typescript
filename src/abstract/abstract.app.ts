/**
 * This is the entry point for the app
 */

import express = require('express');
import helpers = require('../helpers/helpers');
import { configure, getLogger, Log4js } from 'log4js';
import { IAppOptions } from './app-options.interface'; 


/**
 * The Main Class
 * @type {string} id Unique id for the app
 * @type {string} description An app funcionality description
 */
export class AbstractApp {

  public id: string;
  public description: string;
  private routes: express.Application;
  public port: number;
  public options: IAppOptions;
  public _logger: any;

  /** 
   * App constructor
   * @param {string} id Unique id for the app
   * @param {string} description An app funcionality description
   * @type {IAppOptions} options
   */
  constructor(id: string, description: string, options?: IAppOptions) {
    this.id = id;
    this.description = description;
    this.routes = express();
    this.options = options || {};
    this.port = this.options.port || 3333;

    // Logger
    this._logger = getLogger();
    this._logger.level = 'debug';
    this._logger.info( 'App constructor');

  }

  /**
   * This method initialize routes and start server
   */
  init(): Promise<void> {
    const self = this;
    return new Promise((resolve, reject) => {

      try {

        // Route for root api
        self.routes.get('/', (req, res) => {
          res.send(helpers.hello());
        });

        // Start server
        self.routes.listen(self.port, () => {
          resolve();
        });

      } catch (error) {
        reject(error)
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
  getLogger(): Log4js {
    return this._logger;
  }

}


