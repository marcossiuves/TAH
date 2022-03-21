const express = require('express');
const app = express();

const port = 2103;

app.get('/', (req,res) => {
    res.send('Satisfeito, sr. Marcos?')
})

app.listen(port, ()=> {
    console.log(`Aplicação ligada na porta: ${port}`)
})