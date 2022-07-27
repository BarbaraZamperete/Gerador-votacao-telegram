const votacaoCtrl = {}

const Votacao = require('../models/votacao')

const { votacoes, votacao, userLogado } = require("../data")

votacaoCtrl.exibirVotacoes = async (req, res) => {
    const allVotacoes = await Votacao.find()
    res.render('index', { allVotacoes });
}

votacaoCtrl.criarVotacaoForm = async (req, res) => {
    res.render('votacao');
}

votacaoCtrl.criarVotacao = async (req, res) => {
    const { titulo, descricao, duracao } = req.body;
    const newVotacao = new Votacao({
        titulo: titulo,
        descricao: descricao,
        duracao: duracao,
        status: false,
        sim: 0,
        nao: 0,
        total: 0
    })
    await newVotacao.save()
    console.log(req.body)
    console.log(newVotacao)
    res.redirect('/')
}

votacaoCtrl.editarVotacaoForm = async (req, res) => {
    console.log("Buscar no banco a votacao com o id: ", req.params.id)
    const votacaoEditable = await Votacao.findById(req.params.id)
    res.render('editarVotacao', { votacaoEditable });
}
votacaoCtrl.editarVotacao = async (req, res) => {
    const id = req.params.id
    const { titulo, descricao, duracao } = req.body

    const votacaoEdited = await Votacao.findByIdAndUpdate(id, { titulo: titulo, descricao: descricao, duracao: duracao })

    res.redirect('/')
}

votacaoCtrl.excluirVotacao = async (req, res) => {

    await Votacao.findByIdAndDelete(req.params.id)
    
    res.redirect('/')
}

votacaoCtrl.ativar = async (req, res) => {
    await Votacao.findByIdAndUpdate(req.params.id, {status: true})
    res.redirect('/')
}

votacaoCtrl.desativar = async (req, res) => {
    await Votacao.findByIdAndUpdate(req.params.id, {status: false})
    res.redirect('/')
}

module.exports = votacaoCtrl