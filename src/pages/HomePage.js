import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './HomePage.css';

// Import your images
import himImage from '../assets/him-perfume.jpg';
import herImage from '../assets/her-perfume.jpg';

function HomePage() {
  const [animated, setAnimated] = useState(false);
  const heroRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
        }
      },
      { threshold: 0.1 }
    );

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current);
      }
    };
  }, []);

  const handleImageClick = (gender) => {
    navigate(`/${gender}`);
  };

  const headingText = "Unlock the secret of your allure";
  const words = headingText.split(' ');

  return (
    <div className="home-app">
      {/* Video Background */}
      <div className="video-background">
        <video autoPlay loop muted playsInline>
          <source src={`${process.env.PUBLIC_URL}/videos/perfume-background.mp4`} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="video-overlay"></div>
      </div>
      
      <Navbar />
      
      <div className="scrollable-content">
        {/* Hero Section */}
        <section className="hero-section" ref={heroRef}>
          <div className="hero-content">
            <h1 className="hero-heading">
              {words.map((word, index) => (
                <React.Fragment key={index}>
                  <span 
                    className={`word ${animated ? 'animate' : ''}`}
                    style={{ '--delay': `${index * 0.1}s` }}
                  >
                    {word}
                  </span>
                  {index < words.length - 1 && ' '}
                </React.Fragment>
              ))}
            </h1>
            <p className="hero-subheading">Discover your perfect fragrance</p>
          </div>
        </section>
        
        <section className="main-content">
          {/* Our Collections Section */}
          <div className="content-container collections-intro">
          </div>
          
          {/* Image Blocks - Side by Side with more spacing */}
          <div className="image-blocks-container">
            <div className="gender-collection">
              <div 
                className="image-block"
                onClick={() => handleImageClick('him')}
              >
                <img src={himImage} alt="For Him Collection" />
                <div className="image-overlay">
                  <h3>For Him</h3>
                  <button className="explore-btn">View Collection</button>
                </div>
              </div>
            </div>
            
            <div className="gender-collection">
              <div 
                className="image-block"
                onClick={() => handleImageClick('her')}
              >
                <img src={herImage} alt="For Her Collection" />
                <div className="image-overlay">
                  <h3>For Her</h3>
                  <button className="explore-btn">View Collection</button>
                </div>
              </div>
            </div>
          </div>
          
          {/* About Section with more spacing */}
          <div className="content-container about-section">
            <h2>About Our Brand</h2>
            <p>
              Founded in 2023, our perfumery brings decades of fragrance expertise 
              to create scents that captivate and inspire. Each perfume is carefully 
              crafted using sustainable ingredients and traditional techniques.
            </p>
          </div>
          
          {/* Contact Section */}
          <div className="contact-section">
            <h2>Contact Us</h2>
            <div className="contact-content">
              <div className="contact-info">
                <h3>Visit Our Store</h3>
                <p>123 Fragrance Avenue</p>
                <p>Paris, France 75001</p>
                <p>Open 10AM - 8PM Daily</p>
              </div>
              <div className="contact-form">
                <h3>Send Us a Message</h3>
                <form>
                  <input type="text" placeholder="Your Name" required />
                  <input type="email" placeholder="Your Email" required />
                  <textarea placeholder="Your Message" rows="4" required></textarea>
                  <button type="submit">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;