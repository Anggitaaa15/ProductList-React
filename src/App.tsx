import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductCard from "./components/productCard";
import "./App.css";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

function App() {
  const [cart, setCart] = useState<Product[]>([]);

  return (
  <div className="app">
    <Navbar cartCount={cart.length} />

    <main>
      <Hero />

      {/* Bagian daftar produk */}
      <section className="products-section" id="products">
        {/* Pertahankan product-grid dan ProductCard milikmu */}
      </section>

      {/* Bagian shopping cart milikmu */}

      {/* Bagian About milikmu */}
    </main>
  </div>
);
}

export default App
