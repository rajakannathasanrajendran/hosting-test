import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import logoImg from '../../assets/logo.png';

const ORDER_ONLINE_URL = 'https://masala-twist-sachse.maghil.com/restaurant/masala-twist-sachse/menu/Delivery';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const closeMenu = () => setMenuOpen(false);

  const isActive = (path) => pathname === path ? 'active' : '';

  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="header-logo" onClick={closeMenu}>
          <img src={logoImg} alt="Masala Twist" />
        </Link>

        <button
          className={`header-hamburger ${menuOpen ? 'open' : ''}`}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`header-nav-overlay ${menuOpen ? 'open' : ''}`}
          onClick={closeMenu}
          aria-hidden={!menuOpen}
        />

        <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
          <Link to="/"        className={isActive('/')}        onClick={closeMenu}>Home</Link>
          <Link to="/about"   className={isActive('/about')}   onClick={closeMenu}>About Us</Link>
          <Link to="/menu"    className={isActive('/menu')}    onClick={closeMenu}>Menu</Link>
          <Link to="/contact" className={isActive('/contact')} onClick={closeMenu}>Contact Us</Link>
          <a
            href={ORDER_ONLINE_URL}
            className="header-nav-order-mobile"
            onClick={closeMenu}
            target="_blank"
            rel="noreferrer"
          >
            Order Online
          </a>
        </nav>

        <div className="header-order-wrap">
          <a
            href={ORDER_ONLINE_URL}
            className="header-order-btn"
            target="_blank"
            rel="noreferrer"
          >
            ORDER ONLINE
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
