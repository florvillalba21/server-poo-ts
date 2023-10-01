import { Router } from 'express'
import { SaleService } from './sale.service'

function startSaleRouter (saleService: SaleService) {
  const saleRouter = Router()

  saleRouter.get('/', async (req, res) => {
    const allSale = await saleService.list()
    res.status(200).json(allSale)
  })

  saleRouter.post('/', async (req, res) => {
    const { products, date } = req.body
    const importTotal = saleService.calculateTotal(products)
    const newSale = await saleService.create(products, date, importTotal)
    res.status(200).json(newSale)
  })

  return saleRouter
}

export { startSaleRouter }
