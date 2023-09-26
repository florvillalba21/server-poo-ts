import { Router } from 'express'
import { ProductService } from './product.service'

// funcion de creacion de un enrutador de tareas
// recibe un servicio de tareas por parametro
function startProductRouter (productService: ProductService) {
  // instancia de un enrutador
  const ProductRouter = Router()

  // rutas
  ProductRouter.get('/', async (req, res) => {
    const allProducts = await productService.list()
    res.status(200).json(allProducts)
  })

  ProductRouter.post('/', async (req, res) => {
    const { nameProduct, unitPrice, bagPrice, quantityPrice, stock } = req.body
    const newProduct = await productService.create(nameProduct, unitPrice, bagPrice, quantityPrice, stock)
    res.status(201).json(newProduct)
  })

  ProductRouter.patch('/', (req, res) => {
    res.send('update')
  })

  ProductRouter.delete('/:id', async (req, res) => {
    const idProduct = req.params.id
    console.log(idProduct)
    const deletedProduct = await productService.delete(idProduct)
    res.send('delete')
  })

  return ProductRouter
}

export { startProductRouter }
