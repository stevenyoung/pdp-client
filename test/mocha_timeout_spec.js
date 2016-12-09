import { describe, it } from 'mocha';

describe('Mocha Timeout', () => {
  this.timeout(500);
  it('should take around 300ms', (done) => {
    setTimeout(done, 300);
  });
  it('should take around 250ms', (done) => {
    setTimeout(done, 250);
  });
});
