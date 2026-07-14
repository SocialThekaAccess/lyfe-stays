import { useNavigate } from 'react-router-dom';
import { FiUsers, FiHome } from 'react-icons/fi';
import { MdOutlineChildCare, MdOutlineBathtub } from 'react-icons/md';
import './VillaSelection.css';

export default function VillaSelection() {
  const navigate = useNavigate();

  const villas = [
    {
      id: '2bhk',
      title: '2BHK Villa',
      guests: 4,
      kids: 2,
      washrooms: 3,
      image: 'https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?w=800&q=80',
      description: 'Perfect for small families and intimate getaways',
    },
    {
      id: '5bhk',
      title: '5BHK Villa',
      guests: 10,
      kids: 5,
      washrooms: 6,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
      description: 'Ideal for large groups and family reunions',
    },
  ];

  const handleVillaClick = (villaId) => {
    navigate(`/rent?location=Kasauli&type=${villaId}`);
  };

  return (
    <section className="villa-selection">
      <div className="villa-selection__bg">
        <div className="villa-selection__orb villa-selection__orb--1" />
        <div className="villa-selection__orb villa-selection__orb--2" />
      </div>

      <div className="container">
        <div className="villa-selection__header">
          <span className="villa-selection__tag">🏔️ Kasauli, Himachal Pradesh</span>
          <h1 className="villa-selection__title">
            Choose Your <span className="gradient-text">Perfect Villa</span>
          </h1>
          <p className="villa-selection__subtitle">
            Select the villa that best fits your group size and comfort needs
          </p>
        </div>

        <div className="villa-selection__grid">
          {villas.map((villa) => (
            <div
              key={villa.id}
              className="villa-card"
              onClick={() => handleVillaClick(villa.id)}
            >
              <div className="villa-card__image-wrapper">
                <img src={villa.image} alt={villa.title} className="villa-card__image" />
                <div className="villa-card__overlay" />
              </div>

              <div className="villa-card__content">
                <h2 className="villa-card__title">{villa.title}</h2>
                <p className="villa-card__description">{villa.description}</p>

                <div className="villa-card__specs">
                  <div className="villa-card__spec">
                    <FiUsers className="villa-card__icon" />
                    <span>{villa.guests} Guests</span>
                  </div>
                  <div className="villa-card__spec">
                    <MdOutlineChildCare className="villa-card__icon" />
                    <span>{villa.kids} Kids</span>
                  </div>
                  <div className="villa-card__spec">
                    <MdOutlineBathtub className="villa-card__icon" />
                    <span>{villa.washrooms} Washrooms</span>
                  </div>
                  <div className="villa-card__spec">
                    <FiHome className="villa-card__icon" />
                    <span>{villa.id === '2bhk' ? '2' : '5'} Bedrooms</span>
                  </div>
                </div>

                <button className="villa-card__btn">
                  View Properties
                  <span className="villa-card__arrow">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
