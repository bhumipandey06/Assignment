import React, { useState, useRef } from "react";
import axios from "axios";
import "../styles/components.css";

const EditableText = ({ component, field, initialValue }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);
  const contentRef = useRef(null);

  const handleSave = async () => {
    const newValue = contentRef.current.innerText;
    setValue(newValue);
    setIsEditing(false);

    console.log("FRONTEND EDIT DETECTED");
  console.log(`Component: ${component}`);
  console.log(`Field: ${field}`);
  console.log("New Value:");
  console.log(newValue);
  console.log("-".repeat(50));

    try {
      await axios.post("http://localhost:5000/api/update-section", {
        component,
        field,
        value: newValue,
      });

      console.log("Edit logged to backend successfully.");
    } catch (err) {
      console.error("Failed to log edit to backend:", err.message);
    }
  };

  return (
    <div className="editable-text-container">
      <div
        contentEditable={isEditing}
        suppressContentEditableWarning={true}
        ref={contentRef}
        className={`editable-text ${isEditing ? "editing" : ""}`}
      >
        {value}
      </div>

      <button onClick={() => (isEditing ? handleSave() : setIsEditing(true))}>
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
};

export default EditableText;
