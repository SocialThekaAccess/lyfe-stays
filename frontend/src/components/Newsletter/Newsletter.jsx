import { useState } from 'react';
import { FiMail, FiArrowRight, FiGift, FiMapPin } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import './Newsletter.css';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  const deals = [
    { icon: HiOutlineLocationMarker, name: 'Kasauli Special', price: '₹8,500/night', discount: '25% OFF' },
  ];

  return (
    <section className="newsletter section">
      <div className="container">
        <div className="newsletter__card">
          <div className="newsletter__orb-1" />
          <div className="newsletter__orb-2" />

          <div className="newsletter__content">
            <div className="newsletter__icon-wrap">
              <FiGift size={28} />
            </div>
            <span className="section-tag">🎁 Exclusive Deals</span>
            <h2 className="newsletter__title">
              Subscribe for <span className="gradient-text">Exclusive Offers</span>
            </h2>
            <p className="newsletter__desc">
              Join 50,000+ savvy travellers who get early access to deals, insider destination guides, and exclusive LyfeStays member benefits — straight to their inbox.
            </p>

            {!submitted ? (
              <form className="newsletter__form" onSubmit={handleSubmit}>
                <div className="newsletter__input-wrap">
                  <FiMail className="newsletter__input-icon" />
                  <input
                    type="email"
                    className="newsletter__input"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn-primary newsletter__btn">
                  Subscribe Now <FiArrowRight />
                </button>
              </form>
            ) : (
              <div className="newsletter__success">
                <span>🎉</span>
                <p>
                  <strong>Welcome aboard!</strong> You're now subscribed to exclusive deals.
                </p>
              </div>
            )}

            <p className="newsletter__note">
              No spam, ever. Unsubscribe anytime. By subscribing you agree to our Privacy Policy.
            </p>
          </div>

          {/* Right Side Deals Visual */}
          <div className="newsletter__visual">
            {deals.map((deal, idx) => {
              const IconComponent = deal.icon;
              return (
                <div key={idx} className="newsletter__deal-card">
                  <div className="newsletter__deal-icon-svg">
                    <IconComponent />
                  </div>
                  <div className="newsletter__deal-info">
                    <h4 className="newsletter__deal-name">{deal.name}</h4>
                    <p className="newsletter__deal-price">{deal.price}</p>
                  </div>
                  <span className="newsletter__deal-badge">{deal.discount}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
