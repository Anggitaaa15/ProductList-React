type NavbarProps = {
  cartCount: number;
  onClearCart: () => void;
};

function Navbar({ cartCount, onClearCart }: NavbarProps) {
  return (
    <nav className="navbar">
      <a href="#home" className="logo">
        SOLESPACE<span>.</span>
      </a>

      <div className="nav-links">
        <a href="#home">Home</a>
        <a href="#products">Shop</a>
        <a href="#about">About</a>
      </div>

      <div className="nav-actions">
        <a href="#cart" className="nav-cart">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 8h14l1 13H4L5 8Z" />
            <path d="M9 8V6a3 3 0 0 1 6 0v2" />
          </svg>

          <span>Bag</span>
          <span className="cart-badge">{cartCount}</span>
        </a>

        <button
          className="clear-cart-button"
          type="button"
          onClick={onClearCart}
        >
          Clear Cart
        </button>
      </div>
    </nav>
  );
}

export default Navbar;