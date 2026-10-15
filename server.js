const express = require('express');
require('dotenv').config();
const healthRoutes = require('./src/routes/health.routes');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use('/api/v1', healthRoutes);
app.get('/', (req, res) => res.send('Quizbowl Hub API is running'));
app.listen(PORT, () => console.log(`Quizbowl Hub running on port ${PORT}`));

