import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../views/Home";
import { Products } from "../views/Products";
import { Sell } from "../views/Sell";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/list" element={<Products />} />
        <Route path="/sales/form" element={<Sell />} />
    
      </Routes>
    </BrowserRouter>
  );
};