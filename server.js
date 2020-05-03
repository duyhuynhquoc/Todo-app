const express = require('express')
const connectDB = require('./config/db')

const app = express()

// Connect to datase
connectDB()

// Initialize middleware
// Same as body-parser
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.send('Hello'))

app.use('/todos', require('./routes/api/todos'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`))
