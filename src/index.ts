import "dotenv/config"
import "reflect-metadata"
import express from 'express'
import { createConnection } from 'typeorm'

import routes from 'routes'

const PORT = process.env.PORT || 8000

createConnection()
  .then(async _ => {
    const app = express()

    app.use(express.json())
    app.use('/api', routes)

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`)
    })
  })
  .catch(error => console.log("TypeORM error: ", error))
