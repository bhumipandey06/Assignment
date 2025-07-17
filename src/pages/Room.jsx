import React from "react";
import Header from "../components/Header";
import "./../styles/room.css";
import EditableText from "../components/EditableText";
import Footer from "../components/Footer";

const Room = () => {
  return (
    <>
      <Header />

      <section className="room-hero">
        <div className="room-hero-overlay">
          <h1 className="room-hero-title">Rooms</h1>
        </div>
      </section>

      <section className="room-listing">
        <EditableText
          component="RoomPage"
          field="section-title"
          initialValue="Our Rooms"
        />

        <div className="room-grid">
          <div className="room-card">
            <img
              src="https://plus.unsplash.com/premium_photo-1661964402307-02267d1423f5?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Deluxe Room"
              className="room-image"
            />
            <h3>Deluxe Room</h3>
            <p>$200 / Night</p>
          </div>

          <div className="room-card">
            <img
              src="https://images.unsplash.com/photo-1578683010236-d716f9a3f461?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="King Suite"
              className="room-image"
            />
            <h3>King Suite</h3>
            <p>$320 / Night</p>
          </div>

          <div className="room-card">
            <img
              src="https://images.unsplash.com/photo-1631049035581-bec13f40dfff?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Executive Room"
              className="room-image"
            />
            <h3>Executive Room</h3>
            <p>$250 / Night</p>
          </div>
        </div>
      </section>
      <section className="extra-services">
        <p className="section-subtitle">EXTRA SERVICES</p>
        <h2 className="section-title">You Can Also Enjoy These</h2>

        <div className="service-grid">
          <div className="service-card">
            <h3>Room Cleaning</h3>
            <p>Daily housekeeping with fresh linens and towels.</p>
          </div>
          <div className="service-card">
            <h3>Concierge</h3>
            <p>Personal concierge for local experiences & reservations.</p>
          </div>
          <div className="service-card">
            <h3>Room Service</h3>
            <p>24/7 dining from the comfort of your room.</p>
          </div>
        </div>
      </section>

      <section className="inroom-amenities">
        <p className="section-subtitle">THE ESSENTIAL</p>
        <h2 className="section-title">In-Room Amenities</h2>

        <div className="amenities-icon-grid">
          <div className="amenity-icon">
            📶<p>Wi-Fi</p>
          </div>
          <div className="amenity-icon">
            ❄️<p>Air Conditioning</p>
          </div>
          <div className="amenity-icon">
            📺<p>Smart TV</p>
          </div>
          <div className="amenity-icon">
            🛏️<p>Queen Bed</p>
          </div>
          <div className="amenity-icon">
            🚿<p>Shower</p>
          </div>
          <div className="amenity-icon">
            🍾<p>Mini Bar</p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Room;
