import * as helpers from '../helpers/helpers';
import { expect } from 'chai';
import * as request from "request-promise-native";
import { App } from '../app';

const app = new App( 'testAppId', 'Test app', {
  "port": 3334,
  "logsDisabled": true,
  "dbURI": "mongodb+srv://wecomm:shopifyexpressali@cluster0-ghb5j.mongodb.net/test?retryWrites=true&w=majority"
} );

describe( 'Settings tests', () => {

  before( done => {
    app.init().then( () => {
      done();
    } ).catch( error => done( error ) );
  } );

  it( 'Should post a new demo settings document', done => {
    request.post( app.getURL() + '/settings', {
      json: {
        id: 'Demo shop ID',
        shopName: 'Demo shop'
      }
    } ).then( result => {
      done();
    } ).catch( error => done( error ) );

  } );

  it( 'Should get all demo settings document', done => {
    request.get( app.getURL() + '/settings' ).then( result => {
      done();
    } ).catch( error => done( error ) );

  } );

} );