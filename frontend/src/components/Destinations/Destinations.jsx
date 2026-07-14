import { Link } from 'react-router-dom';
import { FiArrowRight, FiMapPin } from 'react-icons/fi';
import { HiOutlineLocationMarker } from 'react-icons/hi';
import { BsTree } from 'react-icons/bs';
import { MdOutlineVilla } from 'react-icons/md';
import { destinations } from '../../data/properties';
import './Destinations.css';

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

        {/* Detailed Cards Grid */}
        <div className="destinations__cards">
          {destinations.map((dest) => (
            <div key={dest.id} className="dest-detail-card">
              {/* Left - Image */}
              <div className="dest-detail-card__image-wrap">
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="dest-detail-card__image" 
                />
              </div>

              {/* Right - Content */}
              <div className="dest-detail-card__content">
                <span className="dest-detail-card__location">
                  <FiMapPin /> HIMACHAL PRADESH
                </span>
                <h3 className="dest-detail-card__title">Kasauli</h3>
                <p className="dest-detail-card__desc">
                  A serene hill station offering colonial charm, pine-covered hills, and breathtaking views.
                </p>

                {/* Features */}
                <div className="dest-detail-card__features">
                  <div className="dest-detail-card__feature">
                    <HiOutlineLocationMarker className="dest-detail-card__feature-icon" />
                    <span className="dest-detail-card__feature-text">Scenic Views</span>
                  </div>
                  <div className="dest-detail-card__feature">
                    <BsTree className="dest-detail-card__feature-icon" />
                    <span className="dest-detail-card__feature-text">Peaceful Environment</span>
                  </div>
                  <div className="dest-detail-card__feature">
                    <MdOutlineVilla className="dest-detail-card__feature-icon" />
                    <span className="dest-detail-card__feature-text">Colonial Charm</span>
                  </div>
                </div>

                {/* Button */}
                <Link to="/rent" className="dest-detail-card__btn">
                  Explore Stays in Kasauli <FiArrowRight />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
