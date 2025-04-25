import express from 'express'
import user_route from './user_route'  // Import the user_route module 
import cors from 'cors';

const app = express()
const port = 3001

app.use(cors());

app.use("/", (req, res, next) => {
  const currentTime = new Date()
  next()
  const used = new Date().getTime() - currentTime.getTime()
  console.log(`Request took ${used}ms`)
})

app.use('/user', user_route)  // Use the user_route module for all routes starting with /user


app.get('/endpoint1', (req, res) => {
  res.send('Hello World!')
})

app.use('/', (req, res, next) => {
  console.log('Middleware for all routes')
  
  next()

  console.log('After middleware for all routes')
})

app.get('/', (req, res) => {
  console.log('Hello World!1')
  res.send('Hello World!')
  console.log('Hello World!2')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})