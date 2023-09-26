import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Home } from "../views/Home";
import { Products } from "../views/Products";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/list" element={<Products />} />
        <Route path="/sales/list" element={<Home />} />
        <Route path="/sales/form" element={<Home />} />
    
      </Routes>
    </BrowserRouter>
  );
};