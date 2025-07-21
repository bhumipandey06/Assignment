import React from "react";
import Header from "../components/Header";
import "./../styles/home.css";
import EditableText from "../components/EditableText";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import AddButtonModal from "../components/AddButtonModal";

const Home = () => {

  const navigate = useNavigate();
  const handleDiscoverClick = () => {
    navigate("/room");
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

            <EditableText
              component="HeroSection"
              field="heading"
              initialValue="A Luxurious Way To Enjoy Your Life"
            />

            <button className="hero-button" onClick={handleDiscoverClick}>
              Discover Rooms →
            </button>
          </div>

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

        <AddButtonModal />


      </section>

      <section className="amenities-section">
        <p className="section-subtitle">INTRODUCING OUR SERVICES</p>
        <h2 className="section-title">Amenities That You Can Enjoy</h2>

        <div className="amenities-grid">
          <div className="amenity-card dark">
            <h3>Workout & Yoga Rooms</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis egestas rhoncus.
            </p>
            <button>Discover More</button>
          </div>

          <div className="amenity-card light">
            <h3>Spa, Massage & Sauna</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis egestas rhoncus.
            </p>
            <button>Discover More</button>
          </div>

          <div className="amenity-card dark">
            <h3>Multiple Cuisines & Beverages</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              convallis egestas rhoncus.
            </p>
            <button>Discover More</button>
          </div>
        </div>
      </section>

      <section className="testimonial-section">
        <div className="testimonial-overlay">
          <p className="section-subtitle">OUR CUSTOMER REVIEW</p>
          <h2 className="section-title light">What Our Client Says</h2>

          <div className="testimonial-box">
            <div className="stars">★★★★★</div>
            <p className="testimonial-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              fermentum, consectetur at, rhoncus sapien.
            </p>
            <p className="testimonial-author">
              Jackson Dean
              <br />
              <span>Guest</span>
            </p>
          </div>
        </div>
      </section>

      <section className="team-section">
        <p className="section-subtitle">MEET OUR TEAM</p>
        <h2 className="section-title">Expert Team Persons</h2>

        <div className="team-grid">
          <div className="team-card">
            <div className="team-photo"></div>
            <h3>Laurent Wayne</h3>
            <p>Hotel Manager</p>
          </div>
          <div className="team-card">
            <div className="team-photo"></div>
            <h3>Josh Mullins</h3>
            <p>Kitchen Manager</p>
          </div>
          <div className="team-card">
            <div className="team-photo"></div>
            <h3>Andrea Hugh</h3>
            <p>Receptionist</p>
          </div>
          <div className="team-card">
            <div className="team-photo"></div>
            <h3>James Norman</h3>
            <p>Room Service</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
