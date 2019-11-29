const express = require('express')
const bodyParser = require('body-parser')
const axios = require('axios')

const id = require('./id')

const PORT = 3000
const ES_URL = 'http://localhost:9200'

const app = express()
app.use(bodyParser.json())

app.get('/vulnerabilities', async (req, res) => {
  let result
  try {
    result = await axios({
      method: 'get',
      url: ES_URL + '/vulnerabilities/_search',
    })
  } catch (error) {
    console.log(error.toJSON())
  }

  const response = result.data.hits.hits.map(item => ({
    id: item._id,
    ...item._source,
  }))

  res.send(response)
})

app.post('/vulnerability', async (req, res) => {
  let result
  try {
    result = await axios({
      method: 'post',
      url: ES_URL + `/vulnerabilities/_doc/${id()}`,
      data: req.body,
    })
  } catch (error) {
    console.log(error.toJSON())
  }

  const response = {
    id: result.data._id,
    result: result.data.result,
  }

  res.send(response)
})

app.get('/vulnerability/:id', async (req, res) => {
  let result
  try {
    result = await axios({
      method: 'get',
      url: ES_URL + `/vulnerabilities/_doc/${req.params.id}`,
      data: req.body,
    })
  } catch (error) {
    console.log(error.toJSON())
  }

  const response = {
    id: result.data._id,
    ...result.data._source,
  }

  res.send(response)
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`))
