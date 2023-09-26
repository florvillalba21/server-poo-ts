import { Product } from '../products/product.entity'
import { Sale } from './sale.entity'
import { SaleTypes } from './saleType'

export interface SaleService {
    list (): Promise<Sale[]>
    find (id: string): Promise <Sale | null>
    calculateTotal (saleType: SaleTypes, products: Product[]): number
    create (products: object, date: string, saleType: SaleTypes, total: number): Promise<Sale>
    delete (id: string): Promise<Sale | null>
}
