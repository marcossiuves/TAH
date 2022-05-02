// const { Router } = require('express')
const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Landing page!')
})

const router = express.Router();
app.use('/usuarios', require('./user'))

// app.get('/usuarios', async (req, res) => {
//   try {
//     const usuarios = await User.findAll();
//     console.log(usuarios)
//     res.send(usuarios)
//   } catch (e) {
//     console.error(e)
//   }
// })

app.listen(port, () => {
  console.log(`Ouvindo servidor na porta: ${port}`)
})

module.exports = router;