import { Product } from '../../products/product.entity'
import { ProductModelMongo } from '../../products/product.model'
import { Sale } from '../sale.entity'
import { SaleModelMongo } from '../sale.model'
import { SaleService } from '../sale.service'

export class SaleServiceMongo implements SaleService {
  model = SaleModelMongo

  list (): Promise<Sale[]> {
    return this.model.find()
  }

  find (id: string): Promise<Sale | null> {
    return this.model.findById(id)
  }

  calculateTotal(products: Product[]): number {
    let total: number = 0;

    products.forEach((element) => {
      let price: number;

      if (element.quantity === 1) {
        price = element.unitPrice;
      } else if (element.quantity >= 2 && element.quantity <= 5) {
        price = element.bagPrice;
      } else {
        price = element.quantityPrice;
      }

      total += price * element.quantity;
    });

    return total;
  }

  async create (products: Product[], date: string, total: number): Promise<Sale> {

     // Actualizar el stock de los productos vendidos
     for (const product of products) {
       const existingProduct = await ProductModelMongo.findOne({ id: product.id });
 
       if (existingProduct) {
         existingProduct.stock -= product.quantity;
         await existingProduct.save();
       }
     }

    const newSale = await this.model.create({ products, date, total })
    return newSale
  }

  delete (id: string): Promise<Sale | null> {
    return this.model.findByIdAndDelete(id)
  }
}
