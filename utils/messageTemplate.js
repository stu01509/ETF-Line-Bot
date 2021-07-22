const investmentTrustList = require('./investmentTrustList');

const etfMessageTemplate = async (title, etfData, limit = 0) => {
  const content = [];
  const times = Number.parseInt(limit, 10) + 50;
  for (let i = limit; i < times && i < etfData.length; i += 1) {
    // eslint-disable-next-line no-nested-ternary
    const priceColor = etfData[i].e === etfData[i].f ? '#555555' : (etfData[i].e - etfData[i].f) > 0 ? '#ff0000' : '#008000';
    content.push({
      type: 'box',
      layout: 'vertical',
      margin: 'lg',
      spacing: 'sm',
      contents: [{
        type: 'box',
        layout: 'baseline',
        spacing: 'sm',
        contents: [{
          type: 'text',
          text: etfData[i].a,
          color: '#111111',
          size: 'sm',
        },
        {
          type: 'text',
          text: etfData[i].b.substring(0, 19),
          wrap: true,
          color: '#111111',
          size: 'sm',
        }],
      },
      {
        type: 'box',
        layout: 'baseline',
        spacing: 'sm',
        contents: [{
          type: 'text',
          text: '市價',
          color: '#777777',
          size: 'sm',
        },
        {
          type: 'text',
          text: etfData[i].e.toString(),
          wrap: true,
          color: '#555555',
          size: 'sm',
        },
        {
          type: 'text',
          text: '淨值',
          color: '#777777',
          size: 'sm',
        },
        {
          type: 'text',
          text: etfData[i].f.toString(),
          wrap: true,
          color: '#555555',
          size: 'sm',
        }],
      },
      {
        type: 'box',
        layout: 'baseline',
        spacing: 'sm',
        contents: [{
          type: 'text',
          text: '折溢價',
          color: '#777777',
          size: 'sm',
        },
        {
          type: 'text',
          text: (etfData[i].e - etfData[i].f).toFixed(4).toString() || '',
          wrap: true,
          color: priceColor,
          size: 'sm',
        },
        {
          type: 'text',
          text: '折溢%',
          color: '#777777',
          size: 'sm',
        },
        {
          type: 'text',
          text: `${etfData[i].g}%` || '',
          wrap: true,
          color: priceColor,
          size: 'sm',
        }],
      },
      {
        type: 'separator',
      }],
    });
  }

  const message = {
    type: 'flex',
    altText: title,
    contents: {
      type: 'carousel',
      contents: [{
        type: 'bubble',
        header: {
          type: 'box',
          layout: 'vertical',
          contents: [{
            type: 'text',
            text: title,
            weight: 'bold',
            size: 'xl',
          },
          {
            type: 'separator',
          }],
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: content,
        },
        footer: {
          type: 'box',
          layout: 'vertical',
          contents: times > etfData.length ? [] : [
            {
              type: 'button',
              action: {
                type: 'postback',
                label: '更多',
                data: `all&all&${times}`,
              },
            },
          ],
        },
        styles: {
          header: {
            separator: true,
          },
        },
      }],
    },
  };
  return message;
};

const singleEtfMessageTemplate = async (title, etfData) => {
  // eslint-disable-next-line no-nested-ternary
  const priceColor = etfData[0].e === etfData[0].f ? '#555555' : (etfData[0].e - etfData[0].f) > 0 ? '#ff0000' : '#008000';

  const message = {
    type: 'flex',
    altText: title,
    contents: {
      type: 'carousel',
      contents: [{
        type: 'bubble',
        header: {
          type: 'box',
          layout: 'vertical',
          contents: [{
            type: 'text',
            text: title,
            weight: 'bold',
            size: 'xl',
          },
          {
            type: 'separator',
          }],
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: [{
            type: 'box',
            layout: 'vertical',
            margin: 'lg',
            spacing: 'sm',
            contents: [{
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [{
                type: 'text',
                text: etfData[0].a,
                color: '#111111',
                size: 'sm',
              },
              {
                type: 'text',
                text: etfData[0].b.substring(0, 19),
                wrap: true,
                color: '#111111',
                size: 'sm',
              }],
            },
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [{
                type: 'text',
                text: '市價',
                color: '#777777',
                size: 'sm',
              },
              {
                type: 'text',
                text: etfData[0].e.toString(),
                wrap: true,
                color: '#555555',
                size: 'sm',
              },
              {
                type: 'text',
                text: '淨值',
                color: '#777777',
                size: 'sm',
              },
              {
                type: 'text',
                text: etfData[0].f.toString(),
                wrap: true,
                color: '#555555',
                size: 'sm',
              }],
            },
            {
              type: 'box',
              layout: 'baseline',
              spacing: 'sm',
              contents: [{
                type: 'text',
                text: '折溢價',
                color: '#777777',
                size: 'sm',
              },
              {
                type: 'text',
                text: (etfData[0].e - etfData[0].f).toFixed(4).toString() || '',
                wrap: true,
                color: priceColor,
                size: 'sm',
              },
              {
                type: 'text',
                text: '折溢%',
                color: '#777777',
                size: 'sm',
              },
              {
                type: 'text',
                text: `${etfData[0].g}%` || '',
                wrap: true,
                color: priceColor,
                size: 'sm',
              }],
            },
            {
              type: 'separator',
            }],
          }],
        },
        footer: {
          type: 'box',
          layout: 'horizontal',
          contents: [
            {
              type: 'button',
              action: {
                type: 'postback',
                label: '加入',
                data: `etfAdd&${etfData[0].a}`,
              },
            },
            {
              type: 'button',
              action: {
                type: 'postback',
                label: '移除',
                data: `etfRemove&${etfData[0].a}`,
              },
            },
          ],
        },
        styles: {
          header: {
            separator: true,
          },
        },
      }],
    },
  };
  return message;
};

const investmentTrustSelectMessage = async () => {
  const content = [];

  investmentTrustList.forEach((investmentTrust) => {
    content.push({
      type: 'button',
      action: {
        type: 'postback',
        label: `${investmentTrust.name}投信`,
        data: `investmentTrust&${investmentTrust.brand}&0`,
      },
    });
  });

  const message = {
    type: 'flex',
    altText: '投信查詢',
    contents: {
      type: 'carousel',
      contents: [{
        type: 'bubble',
        header: {
          type: 'box',
          layout: 'vertical',
          contents: [{
            type: 'text',
            text: '投信查詢',
            weight: 'bold',
            size: 'xl',
          },
          {
            type: 'text',
            text: '請選擇發行的投信公司',
            weight: 'regular',
            size: 'md',
          },
          {
            type: 'separator',
          }],
        },
        body: {
          type: 'box',
          layout: 'vertical',
          contents: content,
        },
        styles: {
          header: {
            separator: true,
          },
        },
      }],
    },
  };
  return message;
};

module.exports.etfMessageTemplate = etfMessageTemplate;
module.exports.singleEtfMessageTemplate = singleEtfMessageTemplate;
module.exports.investmentTrustSelectMessage = investmentTrustSelectMessage;
