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

        expect(result[0]).toEqual({
          a: '0050',
          b: '元大台灣50',
          c: 2327500000,
          d: -14500000,
          e: 121.75,
          f: 121.71,
          g: 0.03,
          h: '123.9900',
          i: '20231026',
          j: '13:45:00',
          k: '1',
        });
        expect(result.length).toEqual(1);
      });
    });

    describe('When the wants to search the 0056', () => {
      it('should able to get the 0056', async () => {
        await etf.loadEtfInfo();

        const result = (await etf.getEtfInfo()).filter((item) => item.a === '0056');

        expect(result[0]).toEqual({
          a: '0056',
          b: '元大高股息',
          c: 6934534000,
          d: 31500000,
          e: 33.1,
          f: 32.9,
          g: 0.61,
          h: '33.4800',
          i: '20231026',
          j: '13:45:00',
          k: '1',
        });
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
