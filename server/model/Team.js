const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Team = new Schema({
    name: {
        type: String
    },
    manager: {
        type: String
    },
    type: {
        type: String
    },
    year:{
        type: Number
    },
    image:{
        type: String
    }
}, {
    collection: 'teams'
});

module.exports = mongoose.model('Team', Team);