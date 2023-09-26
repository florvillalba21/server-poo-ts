import { Product } from './product.entity'

export interface ProductService {
    list (): Promise<Product[]>
    find (id: string): Promise<Product | null>
    create (nameProduct: string, unitPrice: number, bagPrice: number, quantityPrice: number, stock: number): Promise<Product>
    update (id: string, nameProduct: string, price: number, stock: number): Promise<Product | null>
    delete (id: string): Promise<Product | null>
}
