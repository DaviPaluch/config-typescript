import express from 'express'
import { categoriesRoutes } from './routes/categories.routes'

const server = express()

server.use(categoriesRoutes)

server.get("/", (req, res) => {
  console.log("hello world")

})

server.listen(3000, () => console.log("server is running..."))

