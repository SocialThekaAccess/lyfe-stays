import { Link } from 'react-router-dom';
import { FiArrowRight } from 'react-icons/fi';
import PropertyCard from '../PropertyCard/PropertyCard';
import { properties } from '../../data/properties';
import './FeaturedStays.css';

export default function FeaturedStays() {
  return (
    <section className="featured section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">✨ Handpicked Just For You</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Luxury Stays</span>
          </h2>
          <p className="section-subtitle">
            Every property is personally vetted by our travel experts — because you deserve nothing less than extraordinary.
          </p>
        </div>

        {/* Grid */}
        <div className="featured__grid">
          {properties.map((p) => (
            <PropertyCard key={p.id} property={p} />
          ))}
        </div>

        {/* CTA */}
        <div className="featured__cta">
          <Link to="/rent" className="btn-secondary">
            View All Stays <FiArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
}
