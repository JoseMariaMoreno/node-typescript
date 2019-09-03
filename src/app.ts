// lib/app.ts
import express = require('express');
import helpers = require( './helpers' );

/**
 * The Main Class
 */
class App {
  
  public id: string;
  public description: string;
  private routes: express.Application;
  /**
   * App constructor
   * @param id Unique id for the app
   * @param description An app funcionality description
   */
  constructor( id: string, description: string ) {
    this.id = id;
    this.description = description;
    this.routes = express();

    this.routes.get('/', ( req, res ) => {
      res.send( helpers.hello() );
    });

    this.routes.listen(3000, function () {
      console.log('Example app listening on port 3000!');
    });


  }

}
