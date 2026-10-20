
function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <p className="eyebrow">THE EVERYDAY COLLECTION</p>

        <h1>
          Find Your
          <br />
          Perfect Pair.
        </h1>

        <p className="hero-description">
          Simple style. Everyday comfort.
          <br />
          Temukan sepatu favorit untuk setiap langkahmu.
        </p>

        <a href="#products" className="hero-button">Explore Collection<span>→</span></a>
      </div>

      <div className="hero-image">
        <img src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=900" alt="Featured sneaker collection"/>
      </div>
    </section>
  );
}

export default Hero;
