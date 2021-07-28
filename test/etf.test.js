const should = require('should');

const etf = require('../services/etf');

describe('# ETF service test', () => {
  it('Before loading ETF info.', async () => {
    const result = await etf.getEtfInfo();
    should(result).be.empty();
    should(result.length).be.equal(0);
  });

  it('Loading ETF info.', async () => {
    await etf.loadEtfInfo();
    const result = await etf.getEtfInfo();
    should(result.length).not.be.equal(0);
  });

  it('Check 0050 is exist.', async () => {
    const result = (await etf.getEtfInfo()).filter((item) => item.a === '0050');
    result[0].should.containEql({ a: '0050' });
  });

  it('Check 0056 is exist.', async () => {
    const result = (await etf.getEtfInfo()).filter((item) => item.a === '0056');
    result[0].should.containEql({ a: '0056' });
  });

  it('Check 0000 is not exist.', async () => {
    const result = (await etf.getEtfInfo()).filter((item) => item.a === '0000');
    should(result).be.empty();
  });
});
