/**
 * App optional settings
 * @typedef {Object} IAppOptions
 * @property {number} port The server port
 * @property {string} server The server URL
 * @property {string} basePath The RESTful api base path, default /api/1
 * @property {boolean} logsDisabled Run the app whithout logs (for testing purposes). Except warnings and errors.

 */
export interface IAppOptions {
  port?: number | string;
  server?: string;
  basePath?: string;
  logsDisabled?: boolean;
  dbURI?: string;
}