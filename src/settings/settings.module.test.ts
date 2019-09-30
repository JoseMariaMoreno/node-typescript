import * as helpers from '../helpers/helpers';
import { expect } from 'chai';
import * as request from "request-promise-native";
import { App } from '../app';


describe( 'Settings tests', () => {
  it( 'Should get demo settings document', done => {
    const app = new App( 'testAppId', 'Test app' );

    app.init().then( () => {
        request.get( app.getURL() + '/settings' ).then( result => {
          done();
      } ).catch( error => done( error ) );
    } ).catch( error => done( error ) );

  } );

} );