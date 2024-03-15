const express = require('express')
const dotenv = require('dotenv')
const morgan = require('morgan')
const errorHandler = require('./middlewares/error')
const colors = require('colors')
const cors = require('cors')
const path = require('path')
const connectDB = require('./config/db')

//Initialize env variables
dotenv.config()

//Connection to database
connectDB()

// App instance
const app = express()

//Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

if(process.env.NODE_ENV === 'development'){
  app.use(morgan('dev'))
}

//Set static folder
app.use(express.static(path.join(__dirname, 'public')))

//Register routes
app.use('/api/v1/auth', require('./routes/auth.route'))
app.use('/api/v1/stars', require('./routes/star.route'))
app.use('/api/v1/planets', require('./routes/planet.route'))

app.use(errorHandler)

const PORT = process.env.PORT || 4000

app.listen(PORT, ()=>{
  console.log(`Server running in ${process.env.NODE_ENV} mode on port: ${PORT}`.white.bold)
})