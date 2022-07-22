const userCtrl = {}
const { votacoes, usuarios, votacao } = require("../data")

userCtrl.listarUsers = async (req, res) => {
    res.render('usuarios', {usuarios});
}

userCtrl.adicionarUser = async (req, res) => {
    const { id, nome, numero } = req.body
    console.log(req.body)
    res.render('usuarios', {usuarios});
}

userCtrl.removerUser = async (req, res) => {
    console.log(req.params.id)
    res.render('usuarios', {usuarios});
}

module.exports = userCtrl