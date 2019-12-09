"use strict";

var _mongoose = _interopRequireDefault(require("mongoose"));

var _mongooseAutoIncrement = require("mongoose-auto-increment");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { logger, level } from './logger';
const URL = process.env.MONGO_URL;
const OPEN_EVENT = 'open';
const ERROR_EVENT = 'error';

(async () => {
  try {
    await _mongoose.default.connect(URL, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true
    });
  } catch (e) {// logger.log(level.error, `connection error ${e}`);
  }
})();

const db = _mongoose.default.connection;
(0, _mongooseAutoIncrement.initialize)(db);
db.once(OPEN_EVENT, () => {// logger.log(level.info, `Successfully connected to db at ${URL}`);
});
db.on(ERROR_EVENT, () => {// logger.log(level.error, `connection error while connection at ${URL}`);
});