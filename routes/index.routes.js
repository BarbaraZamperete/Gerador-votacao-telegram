const { Router } = require("express");
const router = Router();

const { logarForm, deslogar, logar } = require("../controllers/index.controller");
const {
  adicionarEleitor,
  removerEleitor,
  listarEleitor,
} = require("../controllers/eleitor.controller");
const {
  criarVotacao,
  editarVotacao,
  editarVotacaoForm,
  exibirVotacoes,
  criarVotacaoForm,
  excluirVotacao,
  ativar,
  desativar
} = require("../controllers/votacao.controller");

const { isAuthenticated } = require('../helpers/auth')

//LOGIN PAGE
router.get("/login", logarForm);
router.post("/login", logar)
router.get("/logout", isAuthenticated, deslogar);

//VOTAÇÕES
router.get("/", isAuthenticated, exibirVotacoes);

router.get("/criar", isAuthenticated, criarVotacaoForm);
router.post("/criar", isAuthenticated, criarVotacao);

router.get("/editar/:id", isAuthenticated, editarVotacaoForm);
router.post("/editar/:id", isAuthenticated, editarVotacao);

router.post("/excluir/:id", isAuthenticated, excluirVotacao);

router.post("/ativar/:id", isAuthenticated, ativar)
router.post("/desativar/:id", isAuthenticated, desativar),

//USUÁRIOS

router.get("/eleitores", isAuthenticated, listarEleitor);
router.post("/eleitores/adicionar", isAuthenticated, adicionarEleitor);
router.post("/eleitores/deletar/:id", isAuthenticated, removerEleitor);

module.exports = router;
