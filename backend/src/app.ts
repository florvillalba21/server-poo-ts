import express, { Application } from 'express'
import cors from 'cors'
import { connectToMongo } from './configs/database'
import { startProductRouter } from './inventory/products/product.controller'
import { ProductServiceMongo } from './inventory/products/services/product.mongo.service'
import { startSaleRouter } from './inventory/sale/sale.controller'
import { SaleServiceMongo } from './inventory/sale/services/sale.mongo.service'

// función de inicio del servidor

export function startServer () {
  // instancia de express
  const app: Application = express()

  // middlewares
  app.use(express.json())
  app.use(cors())

  // rutas
  app.use('/api/products', startProductRouter(new ProductServiceMongo()))
  app.use('/api/sales', startSaleRouter(new SaleServiceMongo()))

  // levantar el servidor
  app.listen(3000, () => {
    // Conectarse a la base de datos

    // * MongoDB
    connectToMongo()

    // mensaje de éxito
    console.log('Server is running on port 3000')
  })

  return app
}
