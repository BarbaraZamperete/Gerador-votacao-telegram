const {
    Router
} = require('express');
const router = Router();

const votacoes = [
    {
        id: 1,
        titulo: "Decidir coisa X",
        descricao: "Vamos decidir se coisa X deve acontecer de tal forma",
        inicio: "17/07/2022",
        termino: "28/07/2022",
        status: "ativa",
        sim: 24,
        nao: 32,
        total: 56
    },
    {
        id: 2,
        titulo: "Decidir coisa X",
        descricao: "Vamos decidir se coisa X deve acontecer de tal forma",
        inicio: "17/07/2022",
        termino: "28/07/2022",
        status: "ativa",
        sim: 24,
        nao: 32,
        total: 56
    },
    {
        id: 3,
        titulo: "Decidir coisa X",
        descricao: "Vamos decidir se coisa X deve acontecer de tal forma",
        inicio: "17/07/2022",
        termino: "28/07/2022",
        status: "ativa",
        sim: 24,
        nao: 32,
        total: 56
    },
    {
        id: 4,
        titulo: "Decidir coisa X",
        descricao: "Vamos decidir se coisa X deve acontecer de tal forma",
        inicio: "17/07/2022",
        termino: "28/07/2022",
        status: "ativa",
        sim: 24,
        nao: 32,
        total: 56
    },
]

const usuarios = [
    { id: 1, nome: "Fulano", numero: "991292263" },
    { id: 2, nome: "Fulano", numero: "981292264" },
    { id: 3, nome: "Fulano", numero: "981293265" },
    { id: 4, nome: "Fulano", numero: "991293266" },
]

const votacao = votacoes[0]

router.get('/login', async (req, res) => {
    res.render('login');
})

router.get('/', async (req, res) => {
    res.render('index', { votacoes });
})

router.get('/ativas', async (req, res) => {
    res.render('index', { votacoes });
})

router.get('/finalizadas', async (req, res) => {
    res.render('index', { votacoes });
})

router.get('/criar', async (req, res) => {
    res.render('votacao');
})

router.get('/editar', async (req, res) => {
    res.render('votacao', { votacao });
})

router.get('/usuarios', async (req, res) => {
    res.render('usuarios', {usuarios});
})


module.exports = router