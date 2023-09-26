import { Product } from '../product.entity'
import { ProductModelMongo } from '../product.model'
import { ProductService } from '../product.service'

// Implementacion de un servicio de tareas con MongoDB
export class ProductServiceMongo implements ProductService {
  // se define el modelo de la entidad
  model = ProductModelMongo

  // Se implementan los metodos del servicio

  list (): Promise<Product[]> {
    return this.model.find()
  }

  find (id: string): Promise<Product | null> {
    throw new Error('Method not implemented.')
  }

  async create (nameProduct: string, unitPrice: number, bagPrice: number, quantityPrice: number, stock: number): Promise<Product> {
    const newProduct = await this.model.create({ nameProduct, unitPrice, bagPrice, quantityPrice, stock })
    return newProduct
  }

  update (id: string, nameProduct: string, price: number, stock: number): Promise<Product | null> {
    throw new Error('Method not implemented.')
  }

  async delete (id: string): Promise<Product | null> {
    const productToDelete = await this.model.findByIdAndDelete(id)
    return productToDelete
  }
}
