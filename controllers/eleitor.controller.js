const eleitorCtrl = {}
const { votacoes, eleitores, votacao } = require("../data")

eleitorCtrl.listarEleitor = async (req, res) => {
    res.render('eleitores', {eleitores});
}

eleitorCtrl.adicionarUser = async (req, res) => {
    const { id, nome, numero } = req.body
    console.log(req.body)
    res.render('eleitores', {eleitores});
}

eleitorCtrl.removerUser = async (req, res) => {
    console.log(req.params.id)
    res.render('eleitores', {eleitores});
}

module.exports = eleitorCtrl