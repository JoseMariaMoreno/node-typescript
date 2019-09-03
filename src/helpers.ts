/**
 * Este interface define la estructura de un mensaje de respuesta
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

export function hola(): IMessage {
  return { 
    "text": "¡Hola!" 
  };
}
