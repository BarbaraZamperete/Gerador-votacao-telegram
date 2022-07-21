const {
    Router
} = require('express');
const router = Router();


const { votacoes, usuarios, votacao} = require("../data")

//LOGIN PAGE
router.get('/login', async (req, res) => {
    res.render('login');
})


//VOTAÇÕES
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


//USUÁRIOS

router.get('/usuarios', async (req, res) => {
    res.render('usuarios', {usuarios});
})
router.post('/usuarios/adicionar', async (req, res) => {
    const { id, nome, numero } = req.body
    console.log(req.body)
    res.render('usuarios', {usuarios});
})
router.post('/usuarios/deletar/:id', async (req, res) => {
    console.log(req.params.id)
    res.render('usuarios', {usuarios});
})

module.exports = router