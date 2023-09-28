import { Product } from '../product.entity'
import { ProductModelMongo } from '../product.model'
import { ProductService } from '../product.service'
import { v4 as uuidv4 } from 'uuid';

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
    const id = uuidv4()
    const newProduct = await this.model.create({id, nameProduct, unitPrice, bagPrice, quantityPrice, stock })
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
