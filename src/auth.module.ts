import { AbstractModule } from './abstract/abstract.module';
/**
 * Authorization module
 * @param {string} path Path form RESTful API
 */
export class Auth extends AbstractModule {

  public _path: string = '/auth';

  constructor( id: string, parent: any ) {
    super( id, parent );
    this.createRouter();
  }

}