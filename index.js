const app = require('./server');
require('./db')

const PORT = app.get('port')

app.listen(PORT, () => {
    console.log(`Server on port:${PORT}\nhttp://localhost:${PORT}`);
})