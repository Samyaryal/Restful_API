const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({
    title: {
        type: String,
        reequired: true
    },
    description: {
        type: String,
        reequired: true
    }, 
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Posts', PostSchema);