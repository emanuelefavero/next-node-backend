import express from 'express'
import cors from 'cors'

const app = express()
const clientURL = process.env.CLIENT_URL || 'http://localhost:3000'

app.use(
  cors({
    origin: clientURL,
    // credentials: true,
  })
)

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello', name: 'John' })
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
