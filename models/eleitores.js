const { Schema, model } = require('mongoose')


const EleitoresSchema = new Schema({
    nome: String,
    numero: String,
}, {
    timestamps: false
})

module.exports = model('Eleitores', EleitoresSchema)