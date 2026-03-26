import { useState } from 'react';
import './home.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import bgHome from '../../assets/new/optimized/homebg.png';
import aboutImg from '../../assets/new/optimized/aboutusimg.png';
import menu1 from '../../assets/new/optimized/menu-1.jpg';
import menu2 from '../../assets/new/optimized/menu-2.jpg';
import menu3 from '../../assets/new/optimized/menu-3.jpg';
import gal1 from '../../assets/new/optimized/gal-1.jpg';
import gal2 from '../../assets/new/optimized/gal-2.jpg';
import gal3 from '../../assets/new/optimized/gal-3.jpg';
import gal4 from '../../assets/new/optimized/gal-4.jpg';
import gal5 from '../../assets/new/optimized/gal-5.jpg';
import wholeBg from '../../assets/new/optimized/wholebg.jpg';
import icon1 from '../../assets/new/optimized/icon1.png';
import icon2 from '../../assets/new/optimized/icon2.png';
import icon3 from '../../assets/new/optimized/icon3.png';
import why1 from '../../assets/new/optimized/w1.png';
import why2 from '../../assets/new/optimized/w2.png';
import why3 from '../../assets/new/optimized/w3.png';

const GALLERY_PAGES = [
  [gal1, gal2, gal3, gal4],
  [gal2, gal3, gal4, gal5],
  [gal3, gal4, gal5, gal1],
];

function Stars({ count, max = 5 }) {
  return (
    <div className="stars">
      {Array.from({ length: max }, (_, i) => (
        <i key={i} className={`fa-star ${i < count ? 'fa-solid' : 'fa-regular'}`} />
      ))}
    </div>
  );
}

function Home() {
  const [galleryPage, setGalleryPage] = useState(0);

  return (
    <div className="home">
      <Header />

      <section id="home" className="hero" style={{ backgroundImage: `url(${bgHome})` }}>
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1 className="hero-title">A Modern Taste of India</h1>
          <p className="hero-desc">
            Bold spices, rich traditions, and unforgettable flavors served fresh every day.
            Discover a dining experience that blends classic Indian recipes with contemporary style.
          </p>
          <button
            className="hero-btn"
            onClick={() => window.location.href = '/contact'}
          >
            <i className="fa-solid fa-utensils" />
            Reserve a Table
          </button>
        </div>
      </section>
      
      <section
        id="menu"
        className="section-dark section-text-center special-menu"
        style={{ backgroundImage: `url(${wholeBg})` }}
      >
        <div className="section-bg-overlay" />
        <div className="container ">
          <h2 className="section-title centered">Special Menu <span className="title-dash">-</span></h2>
          <p className="section-intro">
            Signature plates, vivid presentation, and elevated comfort food designed for an indulgent dining experience.
          </p>
          <div className="menu-cards">
            <div className="menu-card">
              <div className="menu-card-img-wrap">
                <img src={menu1} alt="Tandoori Fish" loading="lazy" />
              </div>
              <div className="menu-card-info">
                <h3>Tandoori Fish</h3>
                <Stars count={5} />
                {/* <button className="show-more-btn">Show More</button> */}
              </div>
            </div>
            <div className="menu-card">
              <div className="menu-card-img-wrap">
                <img src={menu2} alt="Butter Naan" loading="lazy" />
              </div>
              <div className="menu-card-info">
                <h3>Butter Naan</h3>
                <Stars count={5} />
                {/* <button className="show-more-btn">Show More</button> */}
              </div>
            </div>
            <div className="menu-card">
              <div className="menu-card-img-wrap">
                <img src={menu3} alt="Tandoori Chicken" loading="lazy" />
              </div>
              <div className="menu-card-info">
                <h3>Tandoori Chicken</h3>
                <Stars count={5} />
                {/* <button className="show-more-btn">Show More</button> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="section-dark about-section section-bg"
        style={{ backgroundImage: `url(${wholeBg})` }}
      >
        <div className="section-bg-overlay" />
        <div className="container about-grid">
          <div className="about-text">
            <p className="section-label">About Us <span className="title-dash">-</span></p>
            <h2 className="about-heading">Taste the Tradition<br />Feel the Warmth</h2>
            <p className="about-para">
            Masala Twist is your destination for an unforgettable Indian dining experience, proudly serving the Sachse community. Our restaurant offers a welcoming atmosphere where delicious food, elegant surroundings, and soothing music come together for any occasion—from casual gatherings to celebrations or business lunches. Our menu showcases the bold spices of North India and the comforting flavors of the South, all with a creative Asian twist. Every dish is freshly prepared by expert chefs using premium ingredients and authentic techniques.
            </p>
          </div>
          <div className="about-img-wrap">
            <img src={aboutImg} alt="Our food" className="about-img" loading="lazy" />
          </div>
          <div className="about-badges">
            <div className="about-badge">
              <div className="about-badge-icon" aria-hidden="true">
                <img src={icon1} alt="" loading="lazy" />
              </div>
              <span>Premium Quality</span>
            </div>
            <div className="about-badge">
              <div className="about-badge-icon" aria-hidden="true">
                <img src={icon2} alt="" loading="lazy" />
              </div>
              <span>Freshly Served</span>
            </div>
            <div className="about-badge">
              <div className="about-badge-icon" aria-hidden="true">
                <img src={icon3} alt="" loading="lazy" />
              </div>
              <span>No 1 in USA</span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="why"
        className="section-dark why-section section-bg section-text-center"
        style={{ backgroundImage: `url(${wholeBg})` }}
      >
        <div className="section-bg-overlay" />
        <div className="container">
          <h2 className="section-title centered">Why Choose Us ? <span className="title-dash">-</span></h2>
          <p className="section-intro">
            Every detail is shaped for a refined visit, from chef-led preparation to seamless service and memorable hospitality.
          </p>
          <div className="why-features">
            <div className="why-feature">
              <div className="why-icon-box">
                <img src={why1} alt="Free Online Delivery" loading="lazy" />
              </div>
              <h3>Free Online Delivery</h3>
              <p>Hot and fresh South Indian meals delivered to your doorstep with a smooth, reliable ordering experience.</p>
            </div>
            <div className="why-feature">
              <div className="why-icon-box">
                <img src={why2} alt="Best Chefs" loading="lazy" />
              </div>
              <h3>Best Chefs</h3>
              <p>Expertly crafted dishes by our master chefs, balancing authentic heritage with polished presentation.</p>
            </div>
            <div className="why-feature">
              <div className="why-icon-box">
                <img src={why3} alt="Best Catering" loading="lazy" />
              </div>
              <h3>Best Catering</h3>
              <p>Exceptional catering with customized menus, fresh ingredients, and attentive service for every gathering.</p>
            </div>
          </div>

          <div className="why-stats">
            <div className="why-stat">
              <span className="stat-num">12+</span>
              <span className="stat-label">Year Experience</span>
            </div>
            <div className="why-stat">
              <span className="stat-num">700+</span>
              <span className="stat-label">Food Items</span>
            </div>
            <div className="why-stat">
              <span className="stat-num">1k+</span>
              <span className="stat-label">Followers</span>
            </div>
            <div className="why-stat">
              <span className="stat-num">100%</span>
              <span className="stat-label">Customer Satisfaction</span>
            </div>
          </div>
        </div>
      </section>

      <section
        id="gallery"
        className="section-dark gallery-section section-bg"
        style={{ backgroundImage: `url(${wholeBg})` }}
      >
        <div className="section-bg-overlay" />
        <div className="container">
          <h2 className="section-title">Gallery <span className="title-dash">-</span></h2>
          <p className="section-intro">
            A closer look at our vibrant tables, handcrafted dishes, and the warm atmosphere guests return for.
          </p>
          <div className="gallery-grid">
            {GALLERY_PAGES[galleryPage].map((src, i) => (
              <div key={i} className={`gallery-item gi-${i}`}>
                <img src={src} alt={`Gallery ${i + 1}`} loading="lazy" />
              </div>
            ))}
          </div>
          <div className="gallery-pagination">
            {GALLERY_PAGES.map((_, i) => (
              <button
                key={i}
                className={`gallery-page-btn ${galleryPage === i ? 'active' : ''}`}
                onClick={() => setGalleryPage(i)}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Home;
