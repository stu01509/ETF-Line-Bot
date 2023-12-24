const etf = require('./index');

describe('services > etf', () => {
  describe('Given the user wants to get the etf result', () => {
    describe('When the user not execute loadEtfInfo', () => {
      it('should able to get the empty result', async () => {
        const result = await etf.getEtfInfo();

        expect(result).toEqual([]);
        expect(result.length).toEqual(0);
      });
    });

    describe('When the user execute loadEtfInfo', () => {
      it('should albe to get the result', async () => {
        await etf.loadEtfInfo();

        const result = await etf.getEtfInfo();

        expect(result).not.toEqual([]);
        expect(result.length).toBeGreaterThan(0);
      });
    });

    describe('When the wants to search the 0050', () => {
      it('should able to get the 0050', async () => {
        await etf.loadEtfInfo();

        const result = (await etf.getEtfInfo()).filter((item) => item.a === '0050');

        expect(result[0]).toEqual(
          expect.objectContaining({
            a: '0050',
            b: '元大台灣50'
          })
        );
        expect(result.length).toEqual(1);
      });
    });

    describe('When the wants to search the 0056', () => {
      it('should able to get the 0056', async () => {
        await etf.loadEtfInfo();

        const result = (await etf.getEtfInfo()).filter((item) => item.a === '0056');

        expect(result[0]).toEqual(
          expect.objectContaining({
            a: '0056',
            b: '元大高股息'
          })
        );
        expect(result.length).toEqual(1);
      });
    });

    describe('When the wants to search no exist etf', () => {
      it('should able to get empty result', async () => {
        await etf.loadEtfInfo();

        const result = (await etf.getEtfInfo()).filter((item) => item.a === '000');

        expect(result).toEqual([]);
        expect(result.length).toEqual(0);
      });
    });
  });
});
