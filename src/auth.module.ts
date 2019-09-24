import { AbstractModule } from './abstract/abstract.module';
import { App } from './app';
/**
 * Authorization module
 * @param {string} path Path form RESTful API
 */
export class AuthModule extends AbstractModule {

  public _path: string = '/auth';

  constructor( parent: App ) {
    super( 'auth', parent );
    this.createRouter();
  }

}