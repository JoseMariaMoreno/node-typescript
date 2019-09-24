import { AbstractApp } from './abstract/abstract.app';
import { Auth } from './auth.module';
import { IAppOptions } from './abstract/app-options.interface'; 

class App extends AbstractApp {

  public auth: Auth;

  constructor( id: string, description: string, options?: IAppOptions ) {

    super( id, description, options );

    this.auth = new Auth( 'auth', this );
    this.logInfo( 'App constructor', this.id );

  }
}

const app = new App('appId', 'App description');

app.init().then( () => app._logger.info(app.description, 'running in port', app.port ) ).catch(console.error);