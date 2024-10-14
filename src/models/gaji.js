const dbPool = require('../config/database');

const getAllGaji = () => {
    const SQLQuery = `SELECT * FROM gaji`;
    return dbPool.execute(SQLQuery);
}

const getGajiById = (id) => {
    const SQLQuery = `SELECT * FROM gaji WHERE id=${id}`;
    return dbPool.execute(SQLQuery);
}

const createNewGaji = (body) => {
    const SQLQuery = `  INSERT INTO gaji(karyawan_id, bulan, gaji_pokok, tunjangan, potongan, total_gaji)
                        VALUES ('${body.karyawan_id}','${body.bulan}','${body.gaji_pokok}','${body.tunjangan}','${body.potongan}','${body.total_gaji}')`;
    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllGaji,
    getGajiById,
    createNewJabatan,
}