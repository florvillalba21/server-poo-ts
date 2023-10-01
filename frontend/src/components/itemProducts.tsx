import { useContext } from "react";
import { ProductContext } from "../context/products/productsContext";
import { Product } from "../utils/products/interface"
import { getProducts } from "../utils/products/products";

// type Props = {
//     data: string,
//     children: React.ReactNode
// }

export const ItemProduct = () => {
    const products = useContext(ProductContext);



    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Producto</th>
                        <th scope="col">Precio unitario</th>
                        <th scope="col">Precio por bolsa</th>
                        <th scope="col">Precio por cantidad</th>
                        <th scope="col">Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {products &&
                        products.map((value: Product, index: number) => {
                            return (
                                <tr key={index}><td>{index + 1}</td>
                                    <td>{value.nameProduct}</td>
                                    <td>{value.unitPrice}</td>
                                    <td>{value.bagPrice}</td>
                                    <td>{value.quantityPrice}</td>
                                    <td>{value.stock}</td>
                                </tr>
                            )
                        })
                    }
                    <tr>
                        <td>
                            <button className="btn btn-primary" onClick={getProducts}> Recargar lista</button>
                        </td>
                    </tr>
                </tbody>

            </table>
        </>
    )
}