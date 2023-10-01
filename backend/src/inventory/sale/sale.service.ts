import { Product } from '../products/product.entity'
import { Sale } from './sale.entity'

export interface SaleService {
    list (): Promise<Sale[]>
    find (id: string): Promise <Sale | null>
    calculateTotal (products: Product[]): number
    create (products: object, date: string, total: number): Promise<Sale>
    delete (id: string): Promise<Sale | null>
}
