const { Router } = require("express");
const router = Router();

const { logar, deslogar } = require("../controllers/index.controller");
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

//LOGIN PAGE
router.get("/login", logar);
router.get("/logout", deslogar);

//VOTAÇÕES
router.get("/", exibirVotacoes);

router.get("/criar", criarVotacaoForm);
router.post("/criar", criarVotacao);

router.get("/editar/:id", editarVotacaoForm);
router.post("/editar/:id", editarVotacao);

router.post("/excluir/:id", excluirVotacao);

router.post("/ativar/:id", ativar)
router.post("/desativar/:id", desativar),

//USUÁRIOS

router.get("/eleitores", listarEleitor);
router.post("/eleitores/adicionar", adicionarEleitor);
router.post("/eleitores/deletar/:id", removerEleitor);

module.exports = router;
