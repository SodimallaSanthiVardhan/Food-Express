import React, { useState, useEffect, useRef } from 'react';
import './Home.css';
import ExploreMenu from '../../Components/ExploreMenu/ExploreMenu';
import FoodItems from '../../Components/FoodItems/FoodItems';

const Home = () => {
  const [category, setCategory] = useState('all');
  const typeRef = useRef(null);

  const messages = ['Flavor', 'Joy', 'Delight', 'Speed'];
  const typingSpeed = 120;
  const erasingSpeed = 70;
  const pauseTime = 1500;

  useEffect(() => {
    let messageIndex = 0;
    let charIndex = 0;
    let timeout;

    const type = () => {
      const current = messages[messageIndex];
      if (charIndex < current.length) {
        if (typeRef.current) {
          typeRef.current.textContent += current.charAt(charIndex);
        }
        charIndex++;
        timeout = setTimeout(type, typingSpeed);
      } else {
        timeout = setTimeout(erase, pauseTime);
      }
    };

    const erase = () => {
      const current = messages[messageIndex];
      if (charIndex > 0) {
        if (typeRef.current) {
          typeRef.current.textContent = current.substring(0, charIndex - 1);
        }
        charIndex--;
        timeout = setTimeout(erase, erasingSpeed);
      } else {
        messageIndex = (messageIndex + 1) % messages.length;
        timeout = setTimeout(type, typingSpeed);
      }
    };

    timeout = setTimeout(type, pauseTime);

    return () => clearTimeout(timeout);
  }, []);

  const scrollToExplore = () => {
    document.getElementById('explore')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="home">
      <header className="hero" role="banner">
        <video
          src="/src/assets/8626672-uhd_3840_2160_25fps.mp4" // Make sure this file exists
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          poster="/src/assets/hero-fallback.jpg"
        />
        <div className="hero-overlay" />
        <div className="hero-content">
          <h1>
            Savor the <span ref={typeRef}></span><br />
            Experience the <span>Speed</span>
          </h1>
          <p>Curated meals, delivered fast and fresh.</p>
          <button onClick={scrollToExplore}>Explore Menu</button>
        </div>
      </header>

      <section id="explore" className="explore-section">
        <ExploreMenu category={category} setcategory={setCategory} />
        <FoodItems category={category} />
      </section>
    </div>
  );
};

export default Home;
