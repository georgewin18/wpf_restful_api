require('dotenv').config()

const PORT = process.env.PORT || 80;
const express = require('express');
const karyawanRoutes = require('./routes/karyawan');
const departemenRoutes = require('./routes/departemen');
const jabatanRoutes = require('./routes/jabatan');
const gajiRoutes = require('./routes/gaji');
const absensiRoutes = require('./routes/absensi');
const middlewareLogRequest = require('./middleware/logs');
const app = express();

app.use(middlewareLogRequest.logRequest);
app.use(express.json());

app.use('/karyawan', karyawanRoutes);
app.use('/departemen', departemenRoutes);
app.use('/jabatan', jabatanRoutes);
app.use('/gaji', gajiRoutes);
app.use('/absensi', absensiRoutes);

app.listen(PORT, () => {
  console.log(`Server running in ${PORT}`);
})
