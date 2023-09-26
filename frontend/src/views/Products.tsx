/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react"
import { getProducts } from "../utils/products/products"
import { ItemProduct } from "../components/itemProducts"

export const Products = () => {

    const [products, setProducts] = useState(getProducts())

    return (
        <>
            <ItemProduct data={products} />
        </>
    )
}