const mongoose = require("mongoose")
const schema = mongoose.Schema

const item = new schema({
    name: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Items', item)