const express = require('express')
const bodyParser = require('body-parser')

const UserInteractions = require('./interactions/user-interactions')

const app = express()

app.set('view engine', 'pug')
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.render('index')
})

app.get('/user/all', async (req, res) => {
  const users = await UserInteractions.findAll()
  res.render('user', { users })
})

app.get('/user/:id', async (req, res) => {
  const user = await UserInteractions.find(req.params.id)
  res.send(usEr)
})

app.post('/user', async (req, res) => {
  const user = await UserInteractions.add(req.body)
  res.send(usEr)
})

app.delete('/user/:id', async (req, res) => {
  const user = await UserInteractions.del(req.params.id)
  res.send(usEr)
})

app.listen(3000, () => {
  console.log('Server listening')
})