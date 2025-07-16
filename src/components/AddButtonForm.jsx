import React, { useState } from "react";
import "../styles/components.css";

const AddButtonForm = ({ onAdd }) => {
  const [text, setText] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text || !url) return;
    onAdd({ text, url });
    setText("");
    setUrl("");
  };

  return (
    <form className="add-btn-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Button Text (e.g., Book Now)"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <input
        type="text"
        placeholder="Button URL (e.g., tel:1234567890)"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button type="submit">Add CTA</button>
    </form>
  );
};

export default AddButtonForm;
