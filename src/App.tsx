import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ProductItem from "./components/ProductItem";
import "./App.css";

type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    name: "Nike Air Max 270",
    price: 1899000,
    image:
      "https://images.unsplash.com/photo-1580902215245-bd46881c72c5?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    price: 2200000,
    image:
      "https://images.unsplash.com/photo-1691067951700-138ca8f4841f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 3,
    name: "New Balance 530",
    price: 1599000,
    image:
      "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=1112&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
  {
    id: 4,
    name: "Converse Chuck Taylor",
    price: 899000,
    image:
      "https://images.unsplash.com/photo-1631683475840-f2dbe46bfa3e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
  },
];

function App() {
  const [cart, setCart] = useState<Product[]>([]);

  const toggleCart = (product: Product) => {
    setCart((previous) => {
      const isAdded = previous.some(
        (item) => item.id === product.id
      );

      if (isAdded) {
        return previous.filter(
          (item) => item.id !== product.id
        );
      }

      return [...previous, product];
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <div className="app">
      <Navbar
        cartCount={cart.length}
        onClearCart={clearCart}
      />

      <main>
        <Hero />

        <section className="products-section" id="products">
          <div className="section-heading">
            <div>
              <p className="eyebrow">OUR COLLECTION</p>
              <h2>New Favorites</h2>
            </div>

            <span>{products.length} products</span>
          </div>

          <div className="product-grid">
            {products.map((product) => (
              <ProductItem
                key={product.id}
                product={product}
                isAdded={cart.some(
                  (item) => item.id === product.id
                )}
                onAddToCart={() => toggleCart(product)}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
