import React, { useState } from "react";
import "../styles/components.css";

const AddButtonForm = ({ onAdd }) => {
  const [showForm, setShowForm] = useState(false);
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !url) return;
    onAdd({ text, url });
    setText("");
    setUrl("");
    setShowForm(false);
  };

  return (
    <div className="add-cta-wrapper">
      {!showForm ? (
        <button className="open-form-btn" onClick={() => setShowForm(true)}>
          + Book Now
        </button>
      ) : (
    <form className="add-btn-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Book Now"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Call Now"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="submit">Add CTA</button>
    </form>
    )}
    </div>
  );
};

export default AddButtonForm;
