import { App } from './app';

const app = new App('appId', 'App description' );

app.init().then().catch(app.logError);