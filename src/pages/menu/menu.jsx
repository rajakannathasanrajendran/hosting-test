import { useState, useEffect, useRef, useCallback } from 'react';
import './menu.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import menuData from '../../data/menuData.json';
import heroBg  from '../../assets/new/optimized/hero-bg.jpg';
import wholeBg from '../../assets/new/wholebg.png.png';

const SPECIALS = new Set([
  'Tandoori Tuesdays',
  'Biryani Wednesdays',
  'Twisted Wrap Thursdays',
  'Dosa Fridays',
]);

// slug for section IDs
const slug = (s) => s.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');

function Menu() {
  const { categories, items } = menuData;

  // All non-"All" categories that have items
  const sectionCats = categories.filter(
    (c) => c !== 'All' && items.some((i) => i.category === c)
  );

  const [activeCategory, setActiveCategory] = useState(sectionCats[0] || '');
  const [showScrollTop, setShowScrollTop]   = useState(false);
  const [mobileOpen, setMobileOpen]         = useState(false);

  const filterRef   = useRef(null);
  const sectionRefs = useRef({});   // cat → DOM element
  const observerRef = useRef(null);

  /* ── Scroll-top visibility ── */
  useEffect(() => {
    const onScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* ── IntersectionObserver: update active pill as sections scroll into view ── */
  useEffect(() => {
    if (observerRef.current) observerRef.current.disconnect();

    const filterHeight = (filterRef.current?.offsetHeight || 60) + 72; // header + filter bar
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Pick the topmost visible section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          const cat = visible[0].target.dataset.cat;
          setActiveCategory(cat);
        }
      },
      {
        rootMargin: `-${filterHeight}px 0px -55% 0px`,
        threshold: 0,
      }
    );

    sectionCats.forEach((cat) => {
      const el = sectionRefs.current[cat];
      if (el) observerRef.current.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [sectionCats.join(',')]);

  /* ── Click pill → smooth scroll to section ── */
  const scrollToSection = useCallback(
    (cat) => {
      setMobileOpen(false);
      const el = sectionRefs.current[cat];
      if (!el) return;
      const filterH = (filterRef.current?.offsetHeight || 56) + 72 + 12;
      const top = el.getBoundingClientRect().top + window.scrollY - filterH;
      window.scrollTo({ top, behavior: 'smooth' });
    },
    []
  );

  /* ── Close mobile dropdown on outside click ── */
  useEffect(() => {
    if (!mobileOpen) return;
    const close = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target))
        setMobileOpen(false);
    };
    document.addEventListener('mousedown', close);
    return () => document.removeEventListener('mousedown', close);
  }, [mobileOpen]);

  return (
    <div className="mn-page">
      <Header />

      {/* ── HERO ── */}
      <section className="mn-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="mn-hero-grad" />
        <div className="mn-hero-body">
          <div className="mn-hero-rule"><span /></div>
          <p className="mn-overline">Masala Twist Xpress</p>
          <h1 className="mn-hero-h1">Our Menu</h1>
          <p className="mn-hero-desc">
            Bold spices, rich traditions, unforgettable flavours —<br />
            freshly crafted every single day.
          </p>
        </div>
      </section>

      {/* ── BACKGROUND WRAPPER ── */}
      <div className="mn-bg" style={{ '--mn-bg-img': `url(${wholeBg})` }}>
        <div className="mn-bg-scrim" />

        {/* ── STICKY FILTER BAR ── */}
        <div className="mn-filter-outer" ref={filterRef}>
          <div className="mn-filter-inner">

            {/* Mobile dropdown */}
            <div className="mn-mob-filter">
              <button
                className="mn-mob-toggle"
                onClick={() => setMobileOpen((v) => !v)}
                aria-expanded={mobileOpen}
              >
                <span>{activeCategory || 'Browse Menu'}</span>
                <i className={`fa-solid fa-chevron-${mobileOpen ? 'up' : 'down'}`} />
              </button>

              {mobileOpen && (
                <div className="mn-mob-dropdown">
                  {sectionCats.map((cat) => (
                    <button
                      key={cat}
                      className={`mn-mob-opt ${activeCategory === cat ? 'active' : ''} ${SPECIALS.has(cat) ? 'special' : ''}`}
                      onClick={() => scrollToSection(cat)}
                    >
                      {SPECIALS.has(cat) && <span className="mn-special-dot" />}
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Desktop scrollable pills */}
            <div className="mn-pills">
              {sectionCats.map((cat) => (
                <button
                  key={cat}
                  className={`mn-pill ${activeCategory === cat ? 'active' : ''} ${SPECIALS.has(cat) ? 'special' : ''}`}
                  onClick={() => scrollToSection(cat)}
                >
                  {SPECIALS.has(cat) && <span className="mn-special-dot" />}
                  {cat}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* ── MENU SECTIONS ── */}
        <main className="mn-main">
          <div className="mn-container">
            {sectionCats.map((cat) => {
              const gItems = items.filter((i) => i.category === cat);
              if (!gItems.length) return null;
              return (
                <section
                  key={cat}
                  id={`section-${slug(cat)}`}
                  data-cat={cat}
                  className="mn-group"
                  ref={(el) => { sectionRefs.current[cat] = el; }}
                >
                  <div className="mn-group-header">
                    <h2 className={`mn-group-title ${SPECIALS.has(cat) ? 'special' : ''}`}>
                      {cat}
                      {SPECIALS.has(cat) && <span className="mn-special-badge">Daily Special</span>}
                    </h2>
                    <div className="mn-group-line" />
                  </div>
                  <ul className="mn-list">
                    {gItems.map((item) => (
                      <li key={item.id} className="mn-item">
                        <span className="mn-item-name">{item.name}</span>
                        <span className="mn-item-dots" aria-hidden="true" />
                        <span className="mn-item-price">${item.price}</span>
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </main>

      </div>{/* end mn-bg */}

      <Footer />

      {showScrollTop && (
        <button
          className="mn-scroll-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <i className="fa-solid fa-chevron-up" />
        </button>
      )}
    </div>
  );
}

export default Menu;
