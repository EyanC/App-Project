const mongoose = require('mongoose');

const cyberSchema = new mongoose.Schema({
    threat: {type: String},
    impact: {type: String},
    mitigation: {type: String}
})

//Creating collection name //Schema//
const Schema = mongoose.model('Schema', cyberSchema);

module.exports = Schema;