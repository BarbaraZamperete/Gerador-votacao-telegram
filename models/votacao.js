const { Schema, model } = require('mongoose')


const VotacaoSchema = new Schema({
    titulo: String,
    descricao: String,
    data: String,
    duracao: Number,
    status: String,
    sim: Number,
    nao: Number,
    total: Number,
}, {
    timestamps: false
})

module.exports = model('Votacao', VotacaoSchema)