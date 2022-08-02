import express from 'express';

const app = express();

// ----- Middleware -----
app.use(express.json());

let queue = [{ _id: 1, question: "How are you? 01", answers: ["Good", "Really good", "Fantastic", "Great"] }, { _id: 2, question: "How are you? 02", answers: ["Good", "Really good", "Fantastic", "Great"] }];

let i = 0
app.get('/poll', (req, res) => {
    // res.send({ 'text': 'Hello, world!' });
    res.status(200).send(queue[(i++) % 2]);
});

app.get('/users', (req, res) => {
    res.status(200).send({ users: ['Ilem_Santo', 'Pilotplayer'] });
});

// ----- Servidor e Porta -----
const port = 3001;
app.listen(port, () =>
    console.log('O servidor está rodando no endereço http://localhost:' + port)
)
