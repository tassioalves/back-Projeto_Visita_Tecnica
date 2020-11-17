const mongoose = require('mongoose');
const role = require('../enum/role');

const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    number: {
        type: Number
    },
    role: {
        type: String,
        required: true,
        default: role.ESTUDANTE,
        enum: Object.values(role)
    },
    course: {
        type: mongoose.Schema.Types.ObjectId
    },
    active: {
        type: Boolean,
        required: true,
        default: true
    }
});

module.exports = User = mongoose.model('user', schema);