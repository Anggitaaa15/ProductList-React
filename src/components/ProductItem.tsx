type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
};

type ProductCardProps = {
  product: Product;
  isAdded: boolean;
  onAddToCart: () => void;
};

function ProductCard({product, isAdded, onAddToCart}: ProductCardProps) {

  return (
    <div className="product-card">
      <div className="product-image">
        <img src={product.image} alt={product.name} />

        <button className="favorite-button">
          ♡
        </button>
      </div>

      <div className="product-info">
        <h3>{product.name}</h3>

        <div className="product-bottom">
          <p>
            Rp {product.price.toLocaleString("id-ID")}
          </p>

          <button
            className={isAdded ? "added-button" : "add-button"}
            onClick={onAddToCart}
            disabled={isAdded}
          >
            {isAdded ? "✓" : "+"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
