import { Product } from "../products/typeProduct";

export interface Sale {
    products: Product[]
    date: string
    typeSale: string
    total: number

}