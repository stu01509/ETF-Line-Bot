const UserSchema = require('../database/user');

module.exports = async function onFollow(event) {
  event.source.profile()
    .then(async (profile) => {
      try {
        const { userId } = event.source;
        const { displayName, statusMessage, pictureUrl } = profile;
        const isUserExist = await UserSchema.findOne({ userId }).select('-_id favoriteEtf').exec();
        if (!isUserExist) {
          const insertUserData = new UserSchema({
            userId,
            displayName,
            statusMessage,
            pictureUrl,
          });
          await insertUserData.save();
        }
        event.reply(`Hello～ ${profile.displayName}\r\n歡迎加入使用 TW ETF Bot。 😀\n讓你快速查詢所有 ETF 的即時淨值。`);
      } catch (error) {
        event.reply(`Hello～ ${profile.displayName}\r\n目前發生了點問題，稍後請重新加入本帳號為好友。`);
      }
    });
};
