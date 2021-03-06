# ð ETF-Line-Bot
![Deploy Status](https://github.com/stu01509/ETF-Line-Bot/actions/workflows/main_TW-ETF-Line-Bot.yml/badge.svg)
![Health Status](https://github.com/stu01509/ETF-Line-Bot/actions/workflows/health_check.yml/badge.svg)

---

![](./assets/banner.png)

ETF-Line-Bot çºä¸æ¬¾å¯ä»¥å³ææ¥è©¢åå§ææ ETF è¡ç¥¨å³ææ·¨å¼ç LINE Botï¼æä¾ä½¿ç¨å¿«éææ¡ ETF è¡ç¥¨çå³ææ·¨å¼è³è¨(5 åéæ´æ°)ï¼ä¹å¯èªè¡è¨­å®èªé¸è¡ï¼è®ä½ è¼é¬å¾ç¥èªå·±éæ³¨ç ETF æ¨çï¼

æ¬å°æ¡åçºåäººçºäºé¢è©¦æéç¼çï¼æ²æä»»ä½ççå©ç®çï¼è³æä¾æºèª[TWSE èºç£è­å¸äº¤ææ](https://mis.twse.com.tw/stock/etf_nav.jsp?ex=tse)ï¼å°æ¼ä»»ä½å æ¸æé¯èª¤ï¼è³æä¸æ­£ç¢ºæå¼èµ·çä»»ä½æå¤±ï¼æ¦ä¸è² è²¬ï¼æè³ä¸å®æé¢¨éªï¼è¡ç¥¨æè³æè³ºæè³ ï¼ç³è³¼åæè©³é±å¬éèªªææ¸ï¼

## åè½

- ð æ¥è©¢å°ç£è¡å¸ç®åä¸å¸ä¸æ«çææ ETFï¼ç®åç´ 227 æªã
- ð¦ æ¥è©¢åå¤§æä¿¡æç¼è¡ç ETF è¡ç¥¨ã
- ð ETF è¡ç¥¨ä»£èæ¥è©¢ï¼è¼¸å¥è¡ç¥¨ä»£èå³å¯æ¥è©¢ã
- ð ETF èªé¸è¡æ¨ççæ°å¢æåªé¤ï¼æå¤å¯ä»¥å²å­ 25 æªã

## Demo

æ°å¢çº LINE å¥½å: [https://line.me/R/ti/p/@623wmicb](https://line.me/R/ti/p/@623wmicb)

QR Code:

![QR Code](./assets/qr.png)

## å°æ¡ç®é

```
.
âââ assets                      # LINE Bot æä½¿ç¨å°çåæªç´ æ
âââ controllers
|   âââ follow.controller.js    # èç follow åæäºä»¶çå¤æ·æµç¨
|   âââ message.controller.js   # èç message åæäºä»¶çå¤æ·æµç¨
|   âââ postback.controller.js  # èç postback åæäºä»¶çå¤æ·æµç¨
âââ database
|   âââ mongodb.js              # Mongo DB é£ç·èç
|   âââ user.js                 # Mongo DB User Collection Schema
âââ services
|   âââ etf.js                  # ç¬å ETF è³æ
âââ utils
|   âââ investmentTrustList.js  # æä¿¡æ¸å®è³æ
|   âââ messageTemplate.js      # Flex Message è¨æ¯æ¨£æ¿
âââ package-lock.json           # NPM å¥ä»¶çæ¬
âââ package.json                # NPM å¥ä»¶çæ¬
âââ app.js                      # ä¸»ç¨å¼
âââ README.md                   # èªªææä»¶
```

## éç¼

### ä¸è¼

```Shell
$ git clone git@github.com:stu01509/ETF-Line-Bot.git
$ cd ETF-Line-Bot
$ npm install

```

### ç°å¢è®æ¸è¨­å®

è«å¨ç¶åç®éä¸æ°å¢ä¸å **.env** æªæ¡ï¼å§å®¹å¯ä»¥ç§é **.env.example** é²è¡ä¿®æ¹ã

```
channelId = YOUR_CHANNEL_ID                     # LINE CHANNEL ID
channelSecret = YOUR_CHANNEL_SECRET             # LINE CHANNEL SECRET
channelAccessToken = YOUR_CHANNEL_ACCESS_TOKEN  # LINE CHANNEL ACCESS TOKEN
PORT = SERVER_LISTEN_PORT                       # Server ç£è½å è
DB_SSL = USE_SSL_PROTOCOL_TO_CONNECT_DB         # MongoDB æ¯å¦ä½¿ç¨ SSL é£ç· true/false
DB_PATH = DB_ADDRESS                            # MongoDB é£ç·ä½ç½®

```

### åå

```Shell
$ npm run start
```

![Start](./assets/start.gif)
