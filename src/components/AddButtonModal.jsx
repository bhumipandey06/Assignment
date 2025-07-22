// components/AddButtonModal.jsx
import React, { useState } from 'react';
import '../styles/AddButtonModal.css';

const AddButtonModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [buttonData, setButtonData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [form, setForm] = useState({
    url: '',
    text: 'Button',
    style: 'Fill',
    color: '#d5a86e',
    size: 'Medium',
  });

  const toggleModal = () => setIsOpen(!isOpen);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    if (editingIndex !== null) {
      const updatedButtons = [...buttonData];
      updatedButtons[editingIndex] = form;
      setButtonData(updatedButtons);
      setEditingIndex(null);
    } else {
      setButtonData([...buttonData, form]);
    }
  
    setForm({
      url: '',
      text: 'Button',
      style: 'Fill',
      color: '#d5a86e',
      size: 'Medium',
    });
  
    toggleModal();
  };

  const handleEdit = (index) => {
    setForm(buttonData[index]);
    setEditingIndex(index);
    setIsOpen(true);
  };
  

  const handleDelete = () => {
    setForm({ url: '', text: 'Button', style: 'Fill', color: '#d5a86e', size: 'Medium' });
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
    <div key={idx} className="btn-with-edit">
      <a
        href={btn.url}
        className={`dynamic-btn ${btn.style} ${btn.size}`}
        style={{
          backgroundColor: btn.style === 'Fill' ? btn.color : 'transparent',
          borderColor: btn.color,
          color: btn.style === 'Fill' ? '#fff' : btn.color
        }}
      >
        {btn.text}
      </a>
      <button className="edit-icon-btn" onClick={() => handleEdit(idx)}>🖋️</button>
    </div>
  ))}
</div>

    </div>
  );
};

export default AddButtonModal;
