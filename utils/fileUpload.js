const express = require('express');
const multer = require('multer');
const app = express();

// Multer configuration
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads'); // Destination folder where uploaded files will be stored
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname); // Custom filename logic
    }
});

const upload = multer({ storage: storage });

// Example route using multer middleware
app.post('/upload', upload.single('image'), (req, res) => {
    // Handle the uploaded file
    res.send('File uploaded successfully');
});

app.listen(8081, () => {
    console.log('Server is running on http://localhost:8081');
});
