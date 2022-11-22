const mongoose = require('mongoose');

const cyberSchema = new mongoose.Schema({
    threat:  { type: String },
    impact: { type: String },
    mitigation:  { type: String },
})

const cyberSecurityCollection = mongoose.model('Cyber', cyberSchema);

module.exports = cyberSecurityCollection;