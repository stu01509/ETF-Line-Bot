const etf = require('../services/etf');
const etfMessageTemplate = require('../utils/messageTemplate');

module.exports = async function onPostBack(event) {
  // postback[0] 搜尋類型
  // postback[1] 發行投信
  // postback[2] 起始索引
  const searchMode = event.postback.data.split('&')[0];
  const brand = event.postback.data.split('&')[1];
  const index = event.postback.data.split('&')[2];
  if (searchMode === 'all') {
    const etfInfo = await etf.getEtfInfo();
    const etfMessage = await etfMessageTemplate.etfMessageTemplate('全部 ETF 查詢', etfInfo, Number.parseInt(index, 10));
    event.reply(etfMessage);
  }
  if (searchMode === 'investmentTrust') {
    const etfInfo = (await etf.getEtfInfo()).filter((item) => item.b.includes(brand));
    const etfMessage = await etfMessageTemplate.etfMessageTemplate(`${brand} ETF 查詢`, etfInfo);
    event.reply(etfMessage);
  }
};
