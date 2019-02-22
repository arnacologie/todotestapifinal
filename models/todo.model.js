const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let TodoSchema = new Schema({
    name: String
},{
    timestamps: true
});

module.exports = mongoose.model('Todo', TodoSchema);