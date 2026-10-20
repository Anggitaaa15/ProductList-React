import { ShoppingBag } from "lucide-react";

type NavbarProps = {
  cartCount: number;
  onClearCart: () => void;
};

const Navbar = ({ cartCount, onClearCart }: NavbarProps) => {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        GetSneakers<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#products">Shop</a>
        <a href="#about">About</a>
      </div>

      <div className="nav-actions">
        <a href="#cart" className="nav-cart">
          <ShoppingBag size={20} strokeWidth={1.7}></ShoppingBag>

          <span>Bag</span>
          <span className="cart-badge">{cartCount}</span>
        </a>

        <button className="clear-cart-button" type="button" onClick={onClearCart}>
          Clear Cart
        </button>
      </div>
    </nav>
  );
}

export default Navbar;