import './about.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';

import heroBg   from '../../assets/new/optimized/Side-13.jpg';
import wholeBg  from '../../assets/new/wholebg.png.png';
import storyImg from '../../assets/new/optimized/visitus2.png';
import sideImg2 from '../../assets/new/Side-03.jpg';
import sideImg3 from '../../assets/new/Side-10.jpg';
import img1     from '../../assets/new/Top-25.jpg';
import img2     from '../../assets/new/Top-26.jpg';
import img3     from '../../assets/new/Top-27.jpg';
import img4 from '../../assets/new/optimized/Side-13.jpg'
import icon1    from '../../assets/icon-1.png';
import icon2    from '../../assets/icon-2.png';
import icon3    from '../../assets/icon-3.png';

const VALUES = [
  { num: '01', title: 'Authentic Flavors',  desc: 'Time-honored Indian spice blends and cooking techniques passed down through generations of master chefs.' },
  { num: '02', title: 'Fresh Every Day',    desc: 'We source the finest produce daily — no shortcuts, no compromises. Pure, wholesome food, always.' },
  { num: '03', title: 'Made with Love',     desc: 'Our chefs pour passion into every plate. Dining here is a warm, personal experience every single time.' },
  { num: '04', title: 'Community Roots',    desc: 'Rooted in Sachse — giving back to the community that has embraced us warmly.' },
];

const TEAM = [
  { img: img1, name: 'Chef Arjun Sharma', role: 'Head Chef · North India' },
  { img: img2, name: 'Chef Priya Menon',  role: 'Head Chef · South India & Fusion' },
  { img: img3, name: 'Ravi Kumar',        role: 'Founder & Director' },
];

export default function About() {
  return (
    <div className="ab-page">
      <Header />

      {/* ── HERO ── */}
      <section className="ab-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="ab-hero-gradient" />
        <div className="ab-hero-body">
          <div className="ab-hero-rule"><span /></div>
          <p className="ab-overline">Who We Are</p>
          <h1 className="ab-hero-h1">Our Story</h1>
          <p className="ab-hero-desc">
            A journey of bold spices, authentic traditions,<br />and unforgettable dining experiences.
          </p>
        </div>
        <div className="ab-hero-scroll">
          <span /><span /><span />
        </div>
      </section>

      {/* ── BG WRAPPER ── */}
      <div className="ab-bg-wrap" style={{ backgroundImage: `url(${wholeBg})` }}>
        <div className="ab-bg-scrim" />

        {/* ── STORY ── */}
        <section className="ab-sec ab-story-sec">
          <div className="ab-ctr ab-story-grid">

            {/* Images column */}
            <div className="ab-story-imgs">
              <div className="ab-img-main">
                <img src={storyImg} alt="Our kitchen" />
              </div>
              <div className="ab-img-float">
                <img src={sideImg2} alt="Our food" />
              </div>
            </div>

            {/* Text column */}
            <div className="ab-story-text">
              <p className="ab-overline">Our Beginning</p>
              <h2 className="ab-h2">Taste the Tradition,<br />Feel the Warmth</h2>
              <div className="ab-accent-bar" />
              <p className="ab-para">
              Masala Twist was born from a simple dream — to bring the rich, vibrant flavors of India to the heart of North Texas. What started as a single kitchen fuelled by passion and family recipes has grown into a beloved dining destination in Sachse.
              </p>
              

              <div className="ab-stats-row">
                <div className="ab-stat">
                  <span className="ab-stat-num">12<sup>+</sup></span>
                  <span className="ab-stat-label">Years of Service</span>
                </div>
                <div className="ab-stat-div" />
                <div className="ab-stat">
                  <span className="ab-stat-num">3</span>
                  <span className="ab-stat-label">Locations</span>
                </div>
                <div className="ab-stat-div" />
                <div className="ab-stat">
                  <span className="ab-stat-num">700<sup>+</sup></span>
                  <span className="ab-stat-label">Menu Items</span>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── VALUES ── */}
        <section className="ab-sec ab-values-sec">
          <div className="ab-ctr">
            <div className="ab-sec-head">
              <p className="ab-overline">What Drives Us</p>
              <h2 className="ab-h2 centered">Our Core Values</h2>
            </div>
            <div className="ab-values-grid">
              {VALUES.map((v) => (
                <div key={v.num} className="ab-val-card">
                  <span className="ab-val-num">{v.num}</span>
                  <h3 className="ab-val-title">{v.title}</h3>
                  <p className="ab-val-desc">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY US ── */}
        <section className="ab-sec ab-why-sec">
          <div className="ab-ctr">
            <div className="ab-sec-head">
              <p className="ab-overline">The Masala Twist Difference</p>
              <h2 className="ab-h2 centered">Why Guests Keep Coming Back</h2>
            </div>
            <div className="ab-why-row">
              {[
                { img: icon1, title: 'Free Delivery',  desc: 'Hot, fresh meals at your door — free of charge on qualifying orders, any day of the week.' },
                { img: icon2, title: 'Master Chefs',   desc: 'Our award-winning culinary team blends tradition with modern innovation in every dish.' },
                { img: icon3, title: 'Best Catering',  desc: 'Custom menus for weddings, corporate events, and intimate private gatherings.' },
              ].map((w) => (
                <div key={w.title} className="ab-why-card">
                  <div className="ab-why-icon">
                    <img src={w.img} alt={w.title} />
                  </div>
                  <h3>{w.title}</h3>
                  <p>{w.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GALLERY STRIP ── */}
        <section className="ab-sec ab-gallery-sec">
          <div className="ab-ctr">
            <div className="ab-sec-head">
              <p className="ab-overline">Inside Masala Twist</p>
              <h2 className="ab-h2 centered">A Taste Through Our Lens</h2>
            </div>
          </div>
          <div className="ab-gallery-strip">
            <div className="ab-gs-item tall"><img src={sideImg3} alt="Dish" /></div>
            <div className="ab-gs-item"><img src={img1} alt="Dish" /></div>
            <div className="ab-gs-item"><img src={img2} alt="Dish" /></div>
            <div className="ab-gs-item tall"><img src={img3} alt="Dish" /></div>
            <div className="ab-gs-item"><img src={img4} alt="Dish" /></div>
          </div>
        </section>

        

        {/* ── CTA STRIP ── */}
        <section className="ab-cta-strip">
          <div className="ab-cta-inner">
            <div>
              <p className="ab-overline" style={{ color: 'rgba(255,220,210,0.8)' }}>Ready to Dine?</p>
              <h2 className="ab-cta-h2">Reserve Your Table Today</h2>
            </div>
            <a href="/contact" className="ab-cta-btn">Book a Table</a>
          </div>
        </section>

      </div>{/* end ab-bg-wrap */}

      <Footer />
    </div>
  );
}
