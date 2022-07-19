const {
    Router
} = require('express');
const router = Router();


const { votacoes, usuarios, votacao} = require("../data")


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