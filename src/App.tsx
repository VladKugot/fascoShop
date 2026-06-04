import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { MainPage } from "./Pages/MainPage/MainPage";
import { ShopPage } from "./Pages/ShopPage/ShopPage";
import { ProductPage } from "./Pages/ProductPage/ProductPage";
import { CartPage } from "./Pages/CartPage/CartPage";
import { CheckoutPage } from "./Pages/CheckoutPage/CheckoutPage";

function App() {
  return (
    <BrowserRouter basename="/fascoShop">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/shopping" element={<ShopPage />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
