const dbPool = require('../config/database');

const getAllAbsensi = () => {
    const SQLQuery = `SELECT * FROM absensi`;
    return dbPool.execute(SQLQuery);
}

const getAbsensiById = (id) => {
    const SQLQuery = `SELECT * FROM absensi WHERE id=${id}`;
    return dbPool.execute(SQLQuery);
}

const getAbsensiByKaryawanId = (karyawanId) => {
    const SQLQuery = `SELECT * FROM absensi WHERE karyawan_id='${karyawanId}'`;
    return dbPool.execute(SQLQuery);
}

const createNewAbsensi = (body) => {
    const SQLQuery = `  INSERT INTO absensi(karyawan_id, tanggal, waktu_masuk, status_absensi)
                        VALUES ('${body.karyawan_id}','${body.tanggal}','${body.waktu_masuk}','${body.status_absensi}')`;
    return dbPool.execute(SQLQuery);
}

const updateAbsensi = (body, id) => {
    const SQLQuery = `  UPDATE absensi
                        SET waktu_keluar='${body.waktu_keluar}'
                        WHERE id=${id}`;
    return dbPool.execute(SQLQuery);
}

const getWaktuKeluar = (id) => {
    const SQLQuery = `SELECT waktu_keluar FROM absensi WHERE id='${id}'`;
    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllAbsensi,
    getAbsensiById,
    getAbsensiByKaryawanId,
    createNewAbsensi,
    updateAbsensi,
    getWaktuKeluar,
}