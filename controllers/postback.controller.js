const UserSchema = require('../database/user');
const etf = require('../services/etf');
const etfMessageTemplate = require('../utils/messageTemplate');

module.exports = async function onPostBack(event) {
  try {
    // postback[0] 搜尋類型
    // postback[1] 發行投信/股票代號
    // postback[2] 起始索引
    const { userId } = event.source;
    const mode = event.postback.data.split('&')[0];
    const brand = event.postback.data.split('&')[1];
    const index = event.postback.data.split('&')[2];

    if (mode === 'all') {
      const etfInfo = await etf.getEtfInfo();
      const etfMessage = await etfMessageTemplate.etfMessageTemplate('全部 ETF 查詢', etfInfo, Number.parseInt(index, 10));
      event.reply(etfMessage);
    }
    if (mode === 'investmentTrust') {
      const etfInfo = (await etf.getEtfInfo()).filter((item) => item.b.includes(brand));
      const etfMessage = await etfMessageTemplate.etfMessageTemplate(`${brand} ETF 查詢`, etfInfo);
      event.reply(etfMessage);
    }
    if (mode === 'etfAdd') {
      const result = await UserSchema.findOne({ userId }).select('-_id favoriteEtf').exec();
      if (result.favoriteEtf.includes(brand)) {
        event.reply('已經新增過囉！');
      } else if (result.favoriteEtf.length > 24) {
        event.reply('已經達到新增上限囉！');
      } else {
        await UserSchema.findOneAndUpdate({ userId }, { $push: { favoriteEtf: brand } }).exec();
        event.reply(`新增 ${brand} 成功！ 🎉🎉🎉`);
      }
    }
    if (mode === 'etfRemove') {
      const result = await UserSchema.findOne({ userId }).select('-_id favoriteEtf').exec();
      if (result.favoriteEtf.includes(brand)) {
        await UserSchema.findOneAndUpdate({ userId }, { $pull: { favoriteEtf: brand } }).exec();
        event.reply(`移除 ${brand} 成功！ 🎉🎉🎉`);
      } else {
        event.reply(`您沒有收藏 ${brand} ETF`);
      }
    }
  } catch (error) {
    event.reply('目前發生了點問題, 請稍後再試. 😭');
  }
};
