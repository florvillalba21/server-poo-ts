import { Product } from '../../products/product.entity'
import { Sale } from '../sale.entity'
import { SaleModelMongo } from '../sale.model'
import { SaleService } from '../sale.service'
import { SaleTypes } from '../saleType'

export class SaleServiceMongo implements SaleService {
  model = SaleModelMongo

  list (): Promise<Sale[]> {
    return this.model.find()
  }

  find (id: string): Promise<Sale | null> {
    return this.model.findById(id)
  }

  calculateTotal (saleType: SaleTypes, products: Product[]): number {
    let total : number = 0
    products.forEach(element => {
      console.log(element)
      if (saleType === SaleTypes.Unidad) {
        total += element.unitPrice
      } else if (saleType === SaleTypes.Cantidad) {
        total += element.quantityPrice * element.quantity
        console.log(element.quantityPrice * element.quantity)
      } else if (saleType === SaleTypes.Bolsa) {
        total += element.bagPrice * element.quantity
      }
    }
    )
    return total
  }

  async create (products: Product[], date: string, saleType: SaleTypes, total: number): Promise<Sale> {
    const newSale = await this.model.create({ products, date, saleType, total })
    return newSale
  }

  delete (id: string): Promise<Sale | null> {
    return this.model.findByIdAndDelete(id)
  }
}
