import { Link } from 'react-router-dom';
import './footer.css';
import logoImg from '../../assets/logo.png';

const MAP_EMBED_SRC = 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12117.320075840293!2d-96.5839!3d32.963716!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1db495073ad1%3A0xaa30aaf21cc2dbea!2sMasala%20Twist%20Xpress%20Sachse!5e1!3m2!1sen!2sus!4v1774426179773!5m2!1sen!2sus';
const ORDER_ONLINE_URL = 'https://masala-twist-sachse.maghil.com/restaurant/masala-twist-sachse/menu/Delivery';

function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer-inner">
        <div className="footer-col footer-brand">
          <Link to="/">
            <img src={logoImg} alt="Masala Twist" className="footer-logo" />
          </Link>
          <p className="footer-policies">
            <a href="#">Privacy Policy</a>
            {' | '}
            <a href="#">Terms &amp; Conditions</a>
            {' | '}
            <a href="#">Refund Policy</a>
          </p>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Quick Link</h4>
          <ul className="footer-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4 className="footer-heading">Services</h4>
          <ul className="footer-list">
            <li><a href="#">Dine-in</a></li>
            <li><a href="#">Take way</a></li>
            <li><a href="#">Delivery</a></li>
            <li><a href="#">Catering</a></li>
            <li><a href="#">Private Events</a></li>
          </ul>
        </div>

        <div className="footer-col footer-map-col">
          <h4 className="footer-heading">Map</h4>
          <div className="footer-map-wrap">
            <iframe
              src={MAP_EMBED_SRC}
              title="Masala Twist Xpress Sachse Map"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>

        <div className="footer-col footer-touch">
          <h4 className="footer-heading">Lets Stay In Touch</h4>
          <a
            href={ORDER_ONLINE_URL}
            className="footer-order-btn"
            target="_blank"
            rel="noreferrer"
          >
            Order Online
          </a>
          <p className="footer-hours">
            Mon-Sun: 11:00
            <br />
            AM - 10:00 PM
          </p>
        </div>
      </div>

      <div className="footer-divider" />

      <div className="footer-copy">
        © Power By Maghil 2026
      </div>
    </footer>
  );
}

export default Footer;
