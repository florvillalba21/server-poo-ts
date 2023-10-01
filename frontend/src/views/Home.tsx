import { CardHome } from "../components/CardHome"

export const Home = () => {
    return (
        <div style={{display:"flex", alignItems: "center", justifyContent: "center", height: "100vh"}}>
            <CardHome
                name="Productos"
                description="Ver la lista de productos"
                url="/products/list"
            />

            <CardHome
                name="Vender"
                description="Ir al formulario de ventas"
                url="/sales/form"
            />
        </div>
    )
}