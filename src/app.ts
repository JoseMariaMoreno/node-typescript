import { AbstractApp } from './abstract/abstract.app';
import { AuthModule } from './auth.module';
import { IAppOptions } from './abstract/app-options.interface'; 
import { SettingsModule } from './settings/settings.module';

require('dotenv').config();


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

//const app = new App('appId', 'App description');

console.log( 'DB_HOST:', process.env.DB_HOST );

//app.init().then( () => app._logger.info(app.description, 'running in port', app.port ) ).catch(console.error);