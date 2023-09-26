import { useProductContext } from "../context/products/productsContext";
import { Product } from "../utils/products/typeProduct"

// type Props = {
//     data: string,
//     children: React.ReactNode
// }

export const ItemProduct = () => {
    const { products, getProducts } = useProductContext();
    console.log(products)



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
                                <tr key={index}><td>{index}</td>
                                    <td>{value.nameProduct}</td>
                                    <td>{value.unitPrice}</td>
                                    <td>{value.bagPrice}</td>
                                    <td>{value.quantityPrice}</td>
                                    <td>{value.stock}</td>
                                </tr>
                            )
                        })
                    }
                    <tr><td><button onClick={getProducts}>Recargar Productos</button></td></tr>

                </tbody>

            </table>
        </>
    )
}