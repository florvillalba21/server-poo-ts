import { Product } from "../products/interface";

export interface Sale {
    products: Product[] | null
    date: string | null

}