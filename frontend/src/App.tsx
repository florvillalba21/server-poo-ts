import { ProductProvider } from "./context/products/productsContext";
import { AppRouter } from "./routes/AppRouter";


function App(): JSX.Element {

  return (
    <ProductProvider>
      <AppRouter />
    </ProductProvider>
  );
}

export default App;
