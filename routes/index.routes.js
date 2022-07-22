const {
    Router
} = require('express');
const router = Router();

const { logar, deslogar } = require('../controllers/index.controller')
const { adicionarUser, removerUser, listarUsers } = require('../controllers/user.controller')
const { criarVotacao, finalizarVotacao, editarVotacao, exibirVotacoes } = require('../controllers/votacao.controller')


//LOGIN PAGE
router.get('/login', logar)
router.get('/logout', deslogar)

//VOTAÇÕES
router.get('/', exibirVotacoes)

router.get('/criar', criarVotacao)

router.get('/editar/:id', editarVotacao)

router.post('/excluir/:id', editarVotacao)


//USUÁRIOS

router.get('/usuarios', listarUsers)
router.post('/usuarios/adicionar', adicionarUser)
router.post('/usuarios/deletar/:id', removerUser)

module.exports = router