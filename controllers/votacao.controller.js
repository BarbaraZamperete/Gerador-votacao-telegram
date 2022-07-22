const votacaoCtrl = {}

const { votacoes, usuarios, votacao, userLogado } = require("../data")

votacaoCtrl.exibirVotacoes = async (req, res) => {
    res.render('index', { votacoes, userLogado });
}

votacaoCtrl.criarVotacao = async (req, res) => {
    res.render('votacao');
}

votacaoCtrl.editarVotacao = async (req, res) => {
    console.log("Buscar no banco a votacao com o id: ", req.params.id)
    res.render('votacao', { votacao });
}

votacaoCtrl.excluirVotacao = async (req, res) => {
    res.render('index', { votacao });
}

module.exports = votacaoCtrl