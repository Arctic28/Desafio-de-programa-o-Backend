const express = require('express');

const app = express();

const garantia = require('./models/modelo_generico');

app.use(express.json());


app.get('/', (req, res) => {
    res.send(garantia);
});

app.get('.garantia:id', (req, res) => {
    const { id } = req.params;
    const garantia = garantia.find((item) => item.id === Number(id));
    if (!garantia) return res.send('Garantia not Found');
    res.send(garantia)
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
