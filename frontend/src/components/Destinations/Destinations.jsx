import { Link } from 'react-router-dom';
import { destinations } from '../../data/properties';
import './Destinations.css';

// Subtitle/state info
const DEST_STATE = {
  'Kasauli': 'Himachal Pradesh',
};

export default function Destinations() {
  return (
    <section className="destinations section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">🗺️ Trending Now</span>
          <h2 className="section-title">
            Explore <span className="gradient-text">Top Destinations</span>
          </h2>
          <p className="section-subtitle">
            From the snow-capped Himalayas to the sun-kissed shores — India's finest addresses, all in one place.
          </p>
        </div>

        {/* Oval Cards Grid */}
        <div className="destinations__grid">
          {destinations.map((d) => (
            <Link key={d.id} to="/rent" className="dest-card">
              <div className="dest-card__oval">
                <img src={d.image} alt={d.name} className="dest-card__img" />
                <div className="dest-card__overlay" />
              </div>
              <div className="dest-card__info">
                <h3 className="dest-card__name">{d.name}</h3>
                <span className="dest-card__state">{DEST_STATE[d.name]}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
