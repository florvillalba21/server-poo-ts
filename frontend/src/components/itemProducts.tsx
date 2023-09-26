import { Product } from "../utils/products/typeProduct"

export const ItemProduct = (data: Product[]) => {

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
                    {
                        data?.map((value, index) => {
                            return (
                                <tr><td>{index}</td>
                                    <td>{value.nameProduct}</td>
                                    <td>{value.unitPrice}</td>
                                    <td>{value.bagPrice}</td>
                                    <td>{value.quantityPrice}</td>
                                    <td>{value.stock}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}