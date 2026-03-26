import { useState } from 'react';
import './contact.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import heroBg  from '../../assets/new/optimized/visitus2.png';
import wholeBg from '../../assets/new/wholebg.png.png';

const LOCATIONS = [
  {
    name: 'Masala Twist Xpress — Sachse',
    address: '4275 Miles Rd #101, Sachse, TX 75048',
    phone: '+1 469-373-3116',
    hours: 'Mon – Sun: 11:00 AM – 10:00 PM',
    mapSrc: 'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12117.320075840293!2d-96.5839!3d32.963716!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x864c1db495073ad1%3A0xaa30aaf21cc2dbea!2sMasala%20Twist%20Xpress%20Sachse!5e1!3m2!1sen!2sus!4v1774426179773!5m2!1sen!2sus',
  },
];

const TOPICS = ['Reservation', 'Catering Inquiry', 'Private Event', 'Feedback', 'Other'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState('');

  const handle = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    setSent(true);
    setForm({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="ct-page">
      <Header />

      {/* ── HERO ── */}
      <section className="ct-hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="ct-hero-gradient" />
        <div className="ct-hero-body">
          <div className="ct-hero-rule"><span /></div>
          <p className="ct-overline">Get In Touch</p>
          <h1 className="ct-hero-h1">Contact Us</h1>
          <p className="ct-hero-desc">
            Reservations, catering enquiries, or simply saying hello —<br />we'd love to hear from you.
          </p>
        </div>
        {/* Quick info bar */}
        <div className="ct-hero-bar">
          <div className="ct-bar-item">
            <i className="fa-solid fa-phone" />
            <span>+1 469-373-3116</span>
          </div>
          <div className="ct-bar-sep" />
          <div className="ct-bar-item">
            <i className="fa-solid fa-clock" />
            <span>Mon – Sun: 11:00 AM – 10:00 PM</span>
          </div>
          <div className="ct-bar-sep" />
          <div className="ct-bar-item">
            <i className="fa-solid fa-location-dot" />
            <span>4275 Miles Rd #101, Sachse, TX</span>
          </div>
        </div>
      </section>

      {/* ── BG WRAPPER ── */}
      <div className="ct-bg-wrap" style={{ backgroundImage: `url(${wholeBg})` }}>
        <div className="ct-bg-scrim" />

        {/* ── FORM + INFO ── */}
        <section className="ct-sec">
          <div className="ct-ctr ct-main-grid">

            {/* ── FORM ── */}
            <div className="ct-form-panel">
              <p className="ct-overline">Send a Message</p>
              <h2 className="ct-h2">We're Here for You</h2>
              <div className="ct-accent-bar" />

              {sent ? (
                <div className="ct-success">
                  <div className="ct-success-icon">
                    <i className="fa-solid fa-check" />
                  </div>
                  <h3>Message Sent!</h3>
                  <p>Thank you for reaching out. We'll get back to you within 24 hours.</p>
                  <button className="ct-success-back" onClick={() => setSent(false)}>
                    Send Another
                  </button>
                </div>
              ) : (
                <form className="ct-form" onSubmit={submit}>
                  <div className="ct-row-2">
                    <div className={`ct-field ${focused === 'name' ? 'focused' : ''} ${form.name ? 'filled' : ''}`}>
                      <label>Full Name</label>
                      <input
                        type="text" name="name" value={form.name}
                        placeholder="John Doe" required
                        onChange={handle}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused('')}
                      />
                    </div>
                    <div className={`ct-field ${focused === 'email' ? 'focused' : ''} ${form.email ? 'filled' : ''}`}>
                      <label>Email Address</label>
                      <input
                        type="email" name="email" value={form.email}
                        placeholder="you@email.com" required
                        onChange={handle}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused('')}
                      />
                    </div>
                  </div>

                  <div className="ct-row-2">
                    <div className={`ct-field ${focused === 'phone' ? 'focused' : ''} ${form.phone ? 'filled' : ''}`}>
                      <label>Phone Number</label>
                      <input
                        type="tel" name="phone" value={form.phone}
                        placeholder="+1 (000) 000-0000"
                        onChange={handle}
                        onFocus={() => setFocused('phone')}
                        onBlur={() => setFocused('')}
                      />
                    </div>
                    <div className={`ct-field ${focused === 'subject' ? 'focused' : ''} ${form.subject ? 'filled' : ''}`}>
                      <label>Topic</label>
                      <select
                        name="subject" value={form.subject} required
                        onChange={handle}
                        onFocus={() => setFocused('subject')}
                        onBlur={() => setFocused('')}
                      >
                        <option value="" disabled>Select a topic</option>
                        {TOPICS.map((t) => <option key={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className={`ct-field ct-field-full ${focused === 'message' ? 'focused' : ''} ${form.message ? 'filled' : ''}`}>
                    <label>Your Message</label>
                    <textarea
                      name="message" value={form.message}
                      placeholder="Tell us how we can help you…"
                      rows={5} required
                      onChange={handle}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused('')}
                    />
                  </div>

                  <button type="submit" className="ct-submit">
                    <span>Send Message</span>
                    <i className="fa-solid fa-arrow-right" />
                  </button>
                </form>
              )}
            </div>

            {/* ── INFO ── */}
            <div className="ct-info-panel">
              <p className="ct-overline">Reach Us Directly</p>
              <h2 className="ct-h2">Quick Info</h2>
              <div className="ct-accent-bar" />

              <div className="ct-info-list">
                <div className="ct-info-item">
                  <div className="ct-info-ico"><i className="fa-solid fa-phone" /></div>
                  <div className="ct-info-text">
                    <span className="ct-info-label">Phone</span>
                    <a href="tel:+14693733116">+1 469-373-3116</a>
                  </div>
                </div>

                <div className="ct-info-item">
                  <div className="ct-info-ico"><i className="fa-solid fa-clock" /></div>
                  <div className="ct-info-text">
                    <span className="ct-info-label">Opening Hours</span>
                    <span>Mon – Sun: 11:00 AM – 10:00 PM</span>
                  </div>
                </div>

                <div className="ct-info-item">
                  <div className="ct-info-ico"><i className="fa-solid fa-location-dot" /></div>
                  <div className="ct-info-text">
                    <span className="ct-info-label">Sachse</span>
                    <span>4275 Miles Rd #101, Sachse, TX 75048</span>
                  </div>
                </div>

                <div className="ct-info-item">
                  <div className="ct-info-ico"><i className="fa-solid fa-utensils" /></div>
                  <div className="ct-info-text">
                    <span className="ct-info-label">Services</span>
                    <span>Dine-in · Takeaway · Delivery · Catering · Private Events</span>
                  </div>
                </div>
              </div>

              <div className="ct-socials">
                <span className="ct-overline" style={{ marginBottom: 0 }}>Follow Along</span>
                <div className="ct-social-icons">
                  <a href="#" aria-label="Instagram"><i className="fa-brands fa-instagram" /></a>
                  <a href="#" aria-label="Facebook"><i className="fa-brands fa-facebook-f" /></a>
                  <a href="#" aria-label="YouTube"><i className="fa-brands fa-youtube" /></a>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* ── LOCATIONS ── */}
        <section className="ct-sec ct-loc-sec">
          <div className="ct-ctr">
            <div className="ct-sec-head">
              <p className="ct-overline">Find Us</p>
              <h2 className="ct-h2 centered">Our Location</h2>
            </div>
            <div className="ct-loc-grid">
              {LOCATIONS.map((loc) => (
                <div key={loc.name} className="ct-loc-card">
                  <div className="ct-map-wrap">
                    <iframe
                      title={loc.name}
                      src={loc.mapSrc}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                  <div className="ct-loc-body">
                    <h3>{loc.name}</h3>
                    <div className="ct-loc-row">
                      <i className="fa-solid fa-location-dot" />
                      <span>{loc.address}</span>
                    </div>
                    <div className="ct-loc-row">
                      <i className="fa-solid fa-phone" />
                      <a href={`tel:${loc.phone.replace(/\D/g,'')}`}>{loc.phone}</a>
                    </div>
                    <div className="ct-loc-row">
                      <i className="fa-solid fa-clock" />
                      <span>{loc.hours}</span>
                    </div>
                    <a
                      href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loc.address)}`}
                      target="_blank" rel="noopener noreferrer"
                      className="ct-dir-btn"
                    >
                      <i className="fa-solid fa-diamond-turn-right" />
                      Get Directions
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>{/* end ct-bg-wrap */}

      <Footer />
    </div>
  );
}
