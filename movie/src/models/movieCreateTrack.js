const mongoose = require('mongoose');

const MovieCreateTrack = mongoose.model('MovieCreateTrack', new mongoose.Schema({
  month: {
    month: Number
  },
  year: {
    month: Number
  },
  count: {
    month: Number
  },
  userId: {
    type: Number
  }
}));

exports.MovieCreateTrack = MovieCreateTrack; 