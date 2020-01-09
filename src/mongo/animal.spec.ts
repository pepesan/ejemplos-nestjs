import { Animal } from './animal';

describe('Animal', () => {
  it('should be defined', () => {
    expect(new Animal()).toBeDefined();
  });
});
