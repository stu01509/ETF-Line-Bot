const linebot = require('linebot');
const followController = require('./controllers/follow.controller');
const messageController = require('./controllers/message.controller');
const postbackController = require('./controllers/postback.controller');
const etf = require('./services/etf');

require('dotenv').config();

const bot = linebot({
  channelId: process.env.channelId,
  channelSecret: process.env.channelSecret,
  channelAccessToken: process.env.channelAccessToken,
});

etf.loadEtfInfo();
setInterval(() => etf.loadEtfInfo(), 5 * 60000);


bot.on('follow', followController);
bot.on('message', messageController);
bot.on('postback', postbackController);
bot.listen('/webhook', process.env.PORT || 3000, () => {
  console.info(`LineBot is running in ${process.env.PORT || 3000} PORT.`);
});
