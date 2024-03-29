/**
 * File with miscelanous functions used by all app modules
 */

/**
 * A Message send to logger
 */
export interface IMessage {
  text: string;
  important?: boolean;
}

/**
 * This method return an hello message
 */
export function hello(): IMessage {
  return {
    "text": "Hello my friend!"
  };
}

/**
 * This method return a bye message
 */
export function bye(): IMessage {
  return {
    "text": "¡Hasta luego Lucas!",
    "important": false
  };
}

/**
 * This method return an standard error object
 */
export interface IErrorObject {
  message: string;
}

/**
 * This method return an standard error object
 */
export function errorObject( message: string ): IErrorObject {
  return {
    message
  };
}