const eleitorCtrl = {}

const Eleitor = require('../models/eleitor')

const { votacoes, eleitores, votacao } = require("../data")

eleitorCtrl.listarEleitor = async (req, res) => {
    const allEleitores = await Eleitor.find()
    res.render('eleitores', {allEleitores});
}

eleitorCtrl.adicionarEleitore = async (req, res) => {
    const { nome, numero } = req.body
    const newEleitor = new Eleitor({nome: nome, numero: numero})
    await newEleitor.save()
    res.redirect('/eleitores')
}

eleitorCtrl.removerEleitore = async (req, res) => {
    console.log(req.params.id)
    await Eleitor.findByIdAndDelete(req.params.id)
    res.redirect('/eleitores')
}

module.exports = eleitorCtrl