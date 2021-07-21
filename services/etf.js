const fetch = require('node-fetch');

const API_URL = 'https://mis.twse.com.tw/stock/data/all_etf.txt';
let etfData = [];

const loadEtfInfo = async () => {
  etfData = [];
  const response = await fetch(API_URL);
  const body = await response.json();
  body.a1.forEach((investmentTrust) => {
    if (investmentTrust.msgArray !== undefined) {
      investmentTrust.msgArray.forEach((etf) => etfData.push(etf));
    }
  });
};

const getEtfInfo = async () => etfData;

module.exports.loadEtfInfo = loadEtfInfo;
module.exports.getEtfInfo = getEtfInfo;
