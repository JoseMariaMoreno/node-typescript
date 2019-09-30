import { AbstractApp } from './abstract/abstract.app';
import { AuthModule } from './auth.module';
import { IAppOptions } from './abstract/app-options.interface';
import { SettingsModule } from './settings/settings.module';

import dotenv = require('dotenv');

const envFile: string = __dirname + '/.env';
console.log( ':::: Getting enviroment vars from', envFile );
dotenv.config({ debug: true, path: envFile });

export class App extends AbstractApp {

  public auth: AuthModule;
  public settings: SettingsModule;

  constructor( id: string, description: string, options?: IAppOptions ) {

    super( id, description, options );

    this.auth = new AuthModule( this );
    this.settings = new SettingsModule( this );
    this.logInfo( 'App constructor', this.id );

  }
}

