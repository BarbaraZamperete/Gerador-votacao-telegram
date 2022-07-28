const votacaoCtrl = {}

const Votacao = require('../models/votacao')


votacaoCtrl.exibirVotacoes = async (req, res) => {
    const allVotacoes = await Votacao.find()
    res.render('index', { allVotacoes });
}

votacaoCtrl.criarVotacaoForm = async (req, res) => {
    res.render('votacao');
}

votacaoCtrl.criarVotacao = async (req, res) => {
    const { titulo, descricao, duracao } = req.body;
    let date_ob = new Date();
    let day = ("0" + date_ob.getDate()).slice(-2)
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    let year = date_ob.getFullYear();
    let fullDate = day + "/" + month + "/" + year
    const newVotacao = new Votacao({
        titulo: titulo,
        descricao: descricao,
        duracao: duracao,
        data: fullDate,
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