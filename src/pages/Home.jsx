import React, { useState } from "react";
import Header from "../components/Header";
import "./../styles/home.css";
import AddButtonForm from "../components/AddButtonForm";

const Home = () => {
  const [ctaButtons, setCtaButtons] = useState([]);

  const handleAddButton = (newButton) => {
    setCtaButtons([...ctaButtons, newButton]);
  };

  return (
    <>
      <Header />

      <section className="hero-section">
        <div className="hero-overlay">
          <div className="hero-content">
            <p className="hero-subtitle">Best place to relax & enjoy</p>
            <h1 className="hero-title">
              A Luxurious Way To <br /> Enjoy Your Life
            </h1>
            <button className="hero-button">Discover Rooms →</button>
          </div>

          {/* Left and right arrows */}
          <div className="hero-arrow left">❮</div>
          <div className="hero-arrow right">❯</div>
        </div>
      </section>

      <section className="booking-section">
        <form className="booking-form">
          <div className="form-group">
            <label>Check In</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Check Out</label>
            <input type="date" />
          </div>
          <div className="form-group">
            <label>Room</label>
            <select>
              <option>1 Room</option>
              <option>2 Rooms</option>
              <option>3 Rooms</option>
            </select>
          </div>
          <button type="submit" className="check-btn">
            Check Availability
          </button>
        </form>
      </section>

      <section className="rooms-section">
        <h2 className="section-title">Luxury Rooms & Suites</h2>

        <div className="room-cards">
          <div className="room-card">Room 1</div>
          <div className="room-card">Room 2</div>
          <div className="room-card">Room 3</div>
        </div>

        <div className="add-button-container">
          <AddButtonForm onAdd={handleAddButton} />
        </div>

        <div className="cta-buttons-container">
          {ctaButtons.map((btn, index) => (
            <a
              key={index}
              href={btn.url}
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn"
            >
              {btn.text}
            </a>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
