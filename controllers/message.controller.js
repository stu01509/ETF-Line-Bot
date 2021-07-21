const etf = require('../services/etf');
const etfMessageTemplate = require('../utils/messageTemplate');

module.exports = async function onMessage(event) {
  const { text } = event.message;
  if (text === '全部 ETF 查詢') {
    const etfInfo = await etf.getEtfInfo();
    const etfMessage = await etfMessageTemplate.etfMessageTemplate('全部 ETF 查詢', etfInfo);
    event.reply(etfMessage);
  }
  if (text === 'ETF 投信查詢') {
    event.reply(await etfMessageTemplate.investmentTrustSelectMessage());
  }
  if (text.match(/^[0-9]{4,}[a-zA-z]?$/gm)) {
    const etfInfo = (await etf.getEtfInfo()).filter((item) => item.a === text.toUpperCase());
    const etfMessage = await etfMessageTemplate.etfMessageTemplate(`${text} 查詢`, etfInfo);
    if (etfInfo.length === 0) {
      event.reply(`抱歉, 目前沒有代號 ${text} 的 ETF.`);
    }
    if (etfInfo.length !== 0) {
      event.reply(etfMessage);
    }
  }
};
