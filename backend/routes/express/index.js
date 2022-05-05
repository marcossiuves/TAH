const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const port = 3001

// app.configure(function () {
//   app.use(express.bodyParser());
// });


// // create application/json parser
// var jsonParser = bodyParser.json()

// // create application/x-www-form-urlencoded parser
// var urlencodedParser = bodyParser.urlencoded({ extended: false })


app.get('/', (req, res) => {
  res.send('Landing page!')
})

const router = express.Router();
app.use('/usuarios', require('./user'))


app.listen(port, () => {
  console.log(`Ouvindo servidor na porta: ${port}`)
})

module.exports = router;