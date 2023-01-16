const express = require('express');
const { v4: uuidv4 } = require('uuid');

const concertsRoutes = require('./routes/concerts.routes');
const seatsRoutes = require('./routes/seats.routes');
const testimonialsRoutes = require('./routes/testimonials.routes');

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/api', concertsRoutes);
app.use('/api', seatsRoutes);
app.use('/api', testimonialsRoutes);

app.use((req, res) => {
	res.status(404).json({ message: 'Not found...' });
});

app.listen(8000, () => {
	console.log('Server is running on port: 8000');
});
