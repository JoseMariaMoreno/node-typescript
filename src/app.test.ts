import * as helpers from './helpers/helpers';
import { expect } from 'chai';
import { AbstractApp } from './abstract/abstract.app';
const app = new AbstractApp( 'test', 'Testbed' );

describe('AbstractApp tests', () => {
  before( done => {
    done();
  });

  it('It should return a string', () => {
    const result = app.getName();
    expect(result).to.be.string;
  });

});