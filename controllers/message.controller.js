const etf = require('../services/etf');
const UserSchema = require('../database/user');
const etfMessageTemplate = require('../utils/messageTemplate');

module.exports = async function onMessage(event) {
  try {
    const { text } = event.message;
    const { userId } = event.source;

    if (text === '全部 ETF 查詢') {
      const etfInfo = await etf.getEtfInfo();
      const etfMessage = await etfMessageTemplate.etfMessageTemplate('全部 ETF 查詢', etfInfo);
      event.reply(etfMessage);
    }
    if (text === 'ETF 投信查詢') {
      event.reply(await etfMessageTemplate.investmentTrustSelectMessage());
    }
    if (text === '自選股查詢') {
      const result = await UserSchema.findOne({ userId }).select('-_id favoriteEtf').exec();
      const etfInfo = (await etf.getEtfInfo())
        .filter((item) => result.favoriteEtf.includes(item.a));

      const etfMessage = await etfMessageTemplate.etfMessageTemplate('自選股查詢', etfInfo);
      event.reply(etfMessage);
    }
    if (text.match(/^[0-9]{4,}[a-zA-z]?$/gm)) {
      const etfInfo = (await etf.getEtfInfo()).filter((item) => item.a === text.toUpperCase());
      if (etfInfo.length === 0) {
        event.reply(`抱歉, 目前沒有代號 ${text} 的 ETF. 😭`);
      }
      if (etfInfo.length !== 0) {
        const etfMessage = await etfMessageTemplate.singleEtfMessageTemplate(`${text} ${etfInfo[0].b}`, etfInfo);
        event.reply(etfMessage);
      }
    }
  } catch (error) {
    event.reply('目前發生了點問題, 請稍後再試. 😭');
  }
};
