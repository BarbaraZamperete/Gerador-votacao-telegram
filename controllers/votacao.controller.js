const votacaoCtrl = {}

const { votacoes, usuarios, votacao } = require("../data")

votacaoCtrl.exibirVotacoes = async (req, res) => {
    res.render('index', { votacoes });
}

votacaoCtrl.criarVotacao = async (req, res) => {
    res.render('votacao');
}

votacaoCtrl.editarVotacao = async (req, res) => {
    res.render('votacao', { votacao });
}

votacaoCtrl.finalizarVotacao = async (req, res) => {
    res.render('index', { votacao });
}

module.exports = votacaoCtrl