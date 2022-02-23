
import express, { Request, Response } from 'express'
const routes= require ('./routes/index')
//import { async } from 'rxjs'
//import db from 'db'

const PORT = process.env.PORT || 3001

const app = express()

app.get('/', (req: Request, res: Response) => {
  res.send('hello woooordl')
})

app.use(routes);

app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
})