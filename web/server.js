import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Create Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Parses incoming JSON requests

// MongoDB Connection
const mongoUri = process.env.MONGO_URI;

if (!mongoUri) {
  console.error("MONGO_URI is not defined in the .env file.");
  process.exit(1); // Exit the application if MONGO_URI is missing
}

mongoose.connect(mongoUri)
  .then(() => console.log("MongoDB connected!"))
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
    process.exit(1); // Exit the application if DB connection fails
  });

// Mongoose Schema and Model for Contact form
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  mobile: { type: String, required: true },
  subject: { type: String, required: true },
  message: { type: String, required: true },
});

const Contact = mongoose.model('Contact', contactSchema);

// Routes
app.get('/', (req, res) => {
  res.send("Welcome to the backend server!");
});

// POST Route to Handle Form Submission
app.post('/submit-form', async (req, res) => {
  const { name, email, mobile, subject, message } = req.body;

  // Check if all fields are provided
  if (!name || !email || !mobile || !subject || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Save the form data in MongoDB
    const newContact = new Contact({ name, email, mobile, subject, message });
    await newContact.save();
    res.status(200).json({ message: "Form submitted successfully!" });
  } catch (err) {
    console.error("Error saving form data:", err);
    res.status(500).json({ error: "Failed to submit the form." });
  }
});

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
