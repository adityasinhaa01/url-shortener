const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const connectMongoDB = require('./connection');
const urlRoute = require('./routes/routes')
const URL = require('./models/schema');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/url', urlRoute);

app.get('/:shortId', async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate({
    shortId
  }, {
    $push: {
      visitHistory: {
        timestamp: new Date().toLocaleString()
      }
    }
  })
  if (!entry) {
    return res.status(404).send("URL not found");
  }
  res.redirect(entry.redirectURL);
});
//Connections
connectMongoDB(process.env.MONGO_URL);

//Routes
app.listen(process.env.PORT, () => {
  console.log(`Server started at port: ${process.env.PORT}`);
});