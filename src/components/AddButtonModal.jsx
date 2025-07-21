// components/AddButtonModal.jsx
import React, { useState } from 'react';
import '../styles/AddButtonModal.css';

const AddButtonModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonData, setButtonData] = useState([]);
  const [form, setForm] = useState({
    url: '',
    text: 'Button',
    style: 'Fill',
    color: '#4338ca',
    size: 'Medium',
  });

  const toggleModal = () => setIsOpen(!isOpen);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setButtonData([...buttonData, form]);
    setForm({ url: '', text: 'Button', style: 'Fill', color: '#4338ca', size: 'Medium' });
    toggleModal();
  };

  const handleDelete = () => {
    setForm({ url: '', text: 'Button', style: 'Fill', color: '#4338ca', size: 'Medium' });
    toggleModal();
  };

  return (
    <div className="button-builder-container">
      <button className="add-button" onClick={toggleModal}>+ Add Button</button>

      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>Link Button to page or URL</h3>
            <p>You can select any specific page or paste URL</p>

            <select name="url" value={form.url} onChange={handleChange}>
              <option value="">Select</option>
              <option value="/rooms">Rooms Page</option>
              <option value="/about">About Page</option>
            </select>

            <label>Button Style</label>
            <select name="style" value={form.style} onChange={handleChange}>
              <option>Fill</option>
              <option>Outline</option>
            </select>

            <label>Button Text</label>
            <input
              name="text"
              value={form.text}
              onChange={handleChange}
              placeholder="Enter button text"
            />

            <label>Color</label>
            <input
              name="color"
              type="color"
              value={form.color}
              onChange={handleChange}
            />

            <label>Button Size</label>
            <select name="size" value={form.size} onChange={handleChange}>
              <option>Small</option>
              <option>Medium</option>
              <option>Large</option>
            </select>

            <button className="save-btn" onClick={handleSave}>Save Button</button>
            <button className="delete-btn" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}

      <div className="generated-buttons">
        {buttonData.map((btn, idx) => (
          <a
            key={idx}
            href={btn.url}
            className={`dynamic-btn ${btn.style} ${btn.size}`}
            style={{ backgroundColor: btn.style === 'Fill' ? btn.color : 'transparent', borderColor: btn.color, color: btn.style === 'Fill' ? '#fff' : btn.color }}
          >
            {btn.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default AddButtonModal;
