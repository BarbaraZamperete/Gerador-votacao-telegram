const indexCtrl = {}

const { votacoes, usuarios, votacao } = require("../data")

indexCtrl.logar = async (req, res) => {
    res.render('login');
}

indexCtrl.deslogar = async (req, res) => {
    res.render('login');
}


module.exports = indexCtrl