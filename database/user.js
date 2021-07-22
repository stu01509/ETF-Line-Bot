const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  userId: {
    type: String,
    required: true,
    index: { unique: true },
  },
  displayName: {
    type: String,
    required: true,
  },
  statusMessage: {
    type: String,
    required: false,
  },
  pictureUrl: {
    type: String,
    required: false,
  },
  favoriteEtf: {
    type: [String],
    default: [],
  },
}, {
  versionKey: false,
  timestamps: { createdAt: 'createdAt' },
});

module.exports = mongoose.model('user', UserSchema, 'user');
