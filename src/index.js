require('dotenv').config()

const PORT = process.env.PORT || 80;
const express = require('express');
const usersRoutes = require('./routes/users');
const middlewareLogRequest = require('./middleware/logs');
const app = express();

app.use(middlewareLogRequest.logRequest);
app.use(express.json());

app.use('/users', usersRoutes);

app.listen(PORT, () => {
  console.log(`Server running in ${PORT}`);
})
