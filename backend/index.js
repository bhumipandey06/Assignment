// backend/index.js
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); // For parsing JSON from frontend

app.post("/api/update-section", (req, res) => {
    try {
      const { component, field, value } = req.body;
  
      console.log("\nFRONTEND EDIT DETECTED");
      console.log(`Component: ${component}`);
      console.log(`Field: ${field}`);
      console.log("New Value:");
      console.log(value);
      console.log("-".repeat(50));
  
      return res.status(200).json({ message: "Edit logged successfully" });
    } catch (err) {
      console.error("Error logging edit:", err.message);
      return res.status(500).json({ error: err.message });
    }
  });
  

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
