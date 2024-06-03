import React from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <header>
        <h1>Twigtrail</h1>
        <nav>
          <Link to="/play">Jugar Ahora</Link>
          <Link to="/about">Acerca de</Link>
        </nav>
      </header>
      <main>
        <section className="hero">
          <h2>Explora y descubre misterios!</h2>
          <p>Únete a la aventura en un mundo lleno de desafíos.</p>
          <Link to="/play" className="play-button">Jugar Ahora</Link>
        </section>
        <section className="about">
          <p>Aprende más sobre el mundo del juego y su historia.</p>
        </section>
      </main>
      <footer>
        © 2024 Twigtrail
      </footer>
    </div>
  );
}

export default HomePage;