import { Product } from "../products/interface";

export interface Sale {
    products: Product[]
    date: string
    typeSale: string
    total: number
    getProducts: () => void;

}