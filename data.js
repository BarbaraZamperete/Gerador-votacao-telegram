const votacoes = [
    {
        id: 1,
        titulo: "Decidir coisa X",
        descricao: "Vamos decidir se coisa X deve acontecer de tal forma",
        data: "18/07/2022",
        duracao: 600,
        status: "ativa",
        sim: 24,
        nao: 32,
        total: 56
    },
    {
        id: 2,
        titulo: "Decidir coisa X",
        descricao: "Vamos decidir se coisa X deve acontecer de tal forma",
        data: "18/07/2022",
        duracao: 600,
        status: "ativa",
        sim: 24,
        nao: 45,
        total: 56
    },
    {
        id: 3,
        titulo: "Decidir coisa X",
        descricao: "Vamos decidir se coisa X deve acontecer de tal forma",
        data: "18/07/2022",
        duracao: 600,
        status: "ativa",
        sim: 81,
        nao: 14,
        total: 56
    },
    {
        id: 4,
        titulo: "Decidir coisa X",
        descricao: "Vamos decidir se coisa X deve acontecer de tal forma",
        inicio: "17/07/2022",
        termino: "28/07/2022",
        status: "ativa",
        sim: 25,
        nao: 78,
        total: 56
    },
]

const eleitores = [
    { id: 1, nome: "Fulano1", numero: "991292263" },
    { id: 2, nome: "Fulano2", numero: "981292264" },
    { id: 3, nome: "Fulano3", numero: "981293265" },
    { id: 4, nome: "Fulano4", numero: "991293266" },
]
const votacao = votacoes[0]

const userLogado = [
    {
        login: "admin",
        senha: "admin123",
    }
]

module.exports = { votacoes, eleitores, votacao, userLogado }