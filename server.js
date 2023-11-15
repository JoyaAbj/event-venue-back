require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT;
require('./config/database/connection');
const cors = require('cors');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const venueRoutes = require('./routes/venueRoutes');
const eventRoutes = require('./routes/eventRoutes');

app.use(cors());
app.use(bodyParser.json());

app.use('/user', userRoutes);
app.use('/venue', venueRoutes);
app.use('/event', eventRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
