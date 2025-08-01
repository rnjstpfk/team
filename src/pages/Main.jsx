import './Main.scss';
import { artworks } from '../data/artworks';
import { Link } from 'react-router-dom'; // ✅ 링크 import

const Main = () => {
  return (
    <div className="main">
      <div className="video-container">
        <video
          className="main-video"
          src="https://api-www.louvre.fr/sites/default/files/2024-04/cover-w1920-h600-scaled.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="video-overlay-text">
          <h1>Réservation obligatoire - Eté 2025</h1>
        </div>
      </div>

      <div className="main_section">
        <section className="gallery">
          {artworks.map((art) => (
            <Link to={`/artwork/${art.id}`} key={art.id} className="galleryItem">
              <img src={art.image} alt={art.title} />
              <h3>{art.title}</h3>
              <p>{art.info}</p>
            </Link>
          ))}
        </section>
      </div>
    </div>
  );
};

export default Main;
