const express = require('express');
const cors = require('cors');
const aboutRoutes = require('./routes/aboutRoutes'); // Sesuaikan dengan path yang benar
const homeRoutes = require('./routes/homeRoutes'); // Sesuaikan dengan path yang benar
const galleryRoutes = require('./routes/galleryRoutes');
const destinationGalleryRoutes = require('./routes/destinationGalleryRoutes');
const location = require ('./routes/locationRoutes');
const roomContRoutes = require('./routes/roomContRoutes');
const serviceRoutes = require ('./routes/serviceRoutes');
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

// Routes
app.use('/api', aboutRoutes);
app.use('/api/home', homeRoutes);   // Rute home menggunakan path '/api/home'
app.use('/api', galleryRoutes);
app.use('/api', destinationGalleryRoutes);
app.use('/api', location);
app.use('/api', roomContRoutes);
app.use('/api', serviceRoutes);


app.get('/', (req, res) => {
    res.json("Backend Connected ...");
});

const PORT = process.env.PORT || 8081; // Port dapat diubah sesuai kebutuhan

app.listen(PORT, () => {
    console.log(`Backend now is running on http://localhost:${PORT}`);
});
