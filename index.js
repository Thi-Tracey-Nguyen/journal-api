import express from 'express'

const categories = ['Food', 'Coding', 'Work', 'Other']

const entries = [
  { category: 'Food', content: 'Hello!' },
  { category: 'Coding', content: 'Express is cool!' },
  { category: 'Work', content: 'Another day at the office' }
]

const app = express()
const port = 4001

app.use(express.json())

app.get('/', (request, response) => response.send({ info: 'Journal API' }))

app.get('/categories', (req, res) => res.send(categories))

app.get('/entries', (req, res) => res.send(entries))

app.post('/entries', (req, res) => {
  // 1. Create a new entry object with values passed in from the reques
  const { category, content } = req.body
  // Validation/sanitize
  const newEntry = { category, content }
  res.send(req.body)
  // 2. Push the new entry to the entries array
  // 3. Send the new entry with 201 status
})

app.listen(port, () => console.log(`App running at http://localhost:${port}/`))
