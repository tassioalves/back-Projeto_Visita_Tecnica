const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  about: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  district: {
    type: String,
    required: true
  },
  street: {             //rua, logradouro
    type: String,
    required: true
  },
  number: {
    type: Number,
    required: true
  },
  complement: {
    type: String,
    required: false
  },
  branch: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  discipline: {
    type: mongoose.Schema.Types.ObjectId,
    required: true
  },
  active: {
    type: Boolean,
    required: true,
    default: true
  }
});

module.exports = Company = mongoose.model('company', schema);