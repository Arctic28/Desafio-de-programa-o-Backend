const express = require('express');

const app = express();

const garantia = require('./models/modelo_generico');

app.use(express.json());


app.get('/', (req, res) => {
    res.send(garantia);
    console.log(garantia);
    
});

let clients = [];

app.post('/cliente', (req, res) => {
    const { name } = req.body;
    const id = clients.length + 1;
    clients.push({ id, name });
    res.send('Client Added')
});

app.put('cliente/:id', (req, res) => {
    const { id } = req.params;
    const { name } = req.body;
    const client = clients.find((value) => value.id === Number(id));
    if (!client) return res.send('Client Not Found');
    client.name = name
    req.send('Client updated');
});

app.get('/garantia/:id', (req, res) => {
    const id = req.params.id;
    const itemgarantia = garantia.find((item) => item.id === Number(id));
    if (!itemgarantia) return res.send('Garantia not Found');
    res.send(itemgarantia)

});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
