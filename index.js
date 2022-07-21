const app = require('./server');
const PORT = app.get('port')

app.listen(PORT, () => {
    console.log(`Server on port:${PORT}\nhttp://localhost:${PORT}`);
})