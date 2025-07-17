import React, { useState, useRef } from "react";
import "../styles/components.css";

const EditableText = ({ component, field, initialValue }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(initialValue);
  const contentRef = useRef(null);

  const handleSave = () => {
    const newValue = contentRef.current.innerText;
    setValue(newValue);
    setIsEditing(false);

    // API log
    console.log("FRONTEND EDIT DETECTED");
    console.log(`Component: ${component}`);
    console.log(`Field: ${field}`);
    console.log("New Value:");
    console.log(newValue);
    console.log("-".repeat(50));
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
