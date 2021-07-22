const mongoose = require('mongoose');

mongoose.Promise = Promise;
mongoose.set('useCreateIndex', true);
mongoose.set('useFindAndModify', false);

const connect = () => new Promise((resolve, reject) => {
  const db = mongoose.connection;
  db.on('error', () => {
    console.error(`Can not connection to ${process.env.DB_PATH}`);
    reject(process.exit(0));
  });

  db.on('open', () => {
    console.info(`Connection to ${process.env.DB_PATH}`);
    resolve();
  });

  db.on('disconnected', () => {
    console.info('Connection disconnected');
  });

  mongoose.connect(process.env.DB_PATH, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ssl: process.env.DB_SSL === 'true',
  });
});

module.exports.connect = connect;
