const { Schema, model } = require('mongoose')


const UserSchema = new Schema({
    login: String,
    senha: String,
}, {
    timestamps: false
})

module.exports = model('User', UserSchema)