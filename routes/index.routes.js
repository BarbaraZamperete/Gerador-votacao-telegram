const {
    Router
} = require('express');
const router = Router();

const { logar, deslogar } = require('../controllers/index.controller')
const { adicionarUser, removerUser, listarEleitor } = require('../controllers/eleitor.controller')
const { criarVotacao, editarVotacao, exibirVotacoes } = require('../controllers/votacao.controller')


//LOGIN PAGE
router.get('/login', logar)
router.get('/logout', deslogar)

//VOTAÇÕES
router.get('/', exibirVotacoes)

router.get('/criar', criarVotacao)

router.get('/editar/:id', editarVotacao)

router.post('/excluir/:id', editarVotacao)


//USUÁRIOS

router.get('/eleitores', listarEleitor)
router.post('/eleitores/adicionar', adicionarUser)
router.post('/eleitores/deletar/:id', removerUser)

module.exports = router