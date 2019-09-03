import * as helpers from '../src/helpers';
import { expect } from 'chai';

describe('Helper functions', () => {
  it('should return hello world', () => {
    const result = helpers.hello();
    const mensaje: helpers.IMessage = {
      "text": "Hello my friend!" 
    }
    expect(result).to.deep.equal( mensaje );
  });
  it('should return bye', () => {
    const result = helpers.bye();
    expect(result).to.deep.equal(<helpers.IMessage>{
      "important": false,
      "text": "¡Hasta luego Lucas!" 
    });
  });
});