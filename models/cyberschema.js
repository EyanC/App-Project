const mongoose = require('mongoose');

const cyberSchema = new mongoose.Schema({
    threat: String,
    impact: String,
    mitigation: String
})

//Creating collection name //Schema//
const Schema = mongoose.model('Schema', cyberSchema);

module.exports = Schema;