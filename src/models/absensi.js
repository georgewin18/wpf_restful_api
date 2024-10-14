const dbPool = require('../config/database');

const getAllAbsensi = () => {
    const SQLQuery = `SELECT * FROM absensi`;
    return dbPool.execute(SQLQuery);
}

const getAbsensiById = (id) => {
    const SQLQuery = `SELECT * FROM absensi WHERE id=${id}`;
    return dbPool.execute(SQLQuery);
}

const createNewAbsensi = (body) => {
    const SQLQuery = `  INSERT INTO absensi(karyawan_id, tanggal, waktu_masuk, waktu_keluar, status_absensi)
                        VALUES ('${body.karyawan_id}','${body.tanggal}','${body.waktu_masuk}','${body.waktu_keluar}','${body.status_absensi}')`;
    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllAbsensi,
    getAbsensiById,
    createNewAbsensi,
}