import React from "react";
import Header from "../components/Header";
import "./../styles/room.css";
import EditableText from "../components/EditableText";

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
    </>
  );
};

export default Room;
