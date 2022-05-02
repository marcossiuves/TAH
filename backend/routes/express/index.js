const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Landing page!')
})

const router = express.Router();
app.use('/usuarios', require('./user'))


app.listen(port, () => {
  console.log(`Ouvindo servidor na porta: ${port}`)
})

module.exports = router;