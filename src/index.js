require('dotenv').config()

const PORT = process.env.PORT || 80;
const express = require('express');
const karyawanRoutes = require('./routes/karyawan');
const middlewareLogRequest = require('./middleware/logs');
const app = express();

app.use(middlewareLogRequest.logRequest);
app.use(express.json());

app.use('/karyawan', karyawanRoutes);

app.listen(PORT, () => {
  console.log(`Server running in ${PORT}`);
})
