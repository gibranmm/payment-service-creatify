require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Payment Service running successfully');
});

app.use('/payments', paymentRoutes);

app.listen(PORT, () => {
    console.log(`Payment service is running on port ${PORT}`);
});