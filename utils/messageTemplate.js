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

const investmentTrustSelectMessage = async () => {
  const INVESTMENT_TRUST_LIST = [
    { name: '元大', brand: '元大' },
    { name: '富邦', brand: '富邦' },
    { name: '國泰', brand: '國泰' },
    { name: '復華', brand: 'FH' },
    { name: '群益', brand: '群益' },
    { name: '台新', brand: '台新' },
    { name: '兆豐', brand: '兆豐' },
    { name: '街口', brand: '街口' },
    { name: '第一', brand: '第一' },
    { name: '統一', brand: '統一' },
    { name: '中信', brand: '中信' },
    { name: '凱基', brand: '凱基' },
    { name: '新光', brand: '新光' },
    { name: '永豐', brand: '永豐' },
    { name: '富蘭克林美華', brand: 'FT' },
  ];
  const content = [];

  INVESTMENT_TRUST_LIST.forEach((investmentTrust) => {
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
module.exports.investmentTrustSelectMessage = investmentTrustSelectMessage;
