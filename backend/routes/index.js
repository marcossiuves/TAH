const express = require('express')
const app = express()
const port = 3001
const router = express.Router();

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/usuarios', require('./user'))
app.use('/questoes', require('./question')) 
app.use('/respostaDaQuestao', require('./questionResponse'))
app.use('/cursos', require('./majorField'))

app.get('/', (req, res) => {
  res.send({ msg: 'Rota do servidor da API testada. Good to go' })
})

app.listen(port, () => {
  console.log(`Ouvindo servidor na porta: ${port}`)
})

module.exports = router;