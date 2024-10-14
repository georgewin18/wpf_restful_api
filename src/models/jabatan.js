const dbPool = require('../config/database');

const getAllJabatan = () => {
    const SQLQuery = `SELECT * FROM jabatan`;
    return dbPool.execute(SQLQuery);
}

const getJabatanById = (id) => {
    const SQLQuery = `SELECT * FROM jabatan WHERE id=${id}`;
    return dbPool.execute(SQLQuery);
}

const createNewJabatan = (body) => {
    const SQLQuery = `  INSERT INTO jabatan(nama_jabatan)
                        VALUES ('${body.nama_jabatan})`;
    return dbPool.execute(SQLQuery);
}

const updateJabatan = (body, id) => {
    const SQLQuery = `  UPDATE jabatan
                        SET nama_jabatan='${body.nama_jabatan}'
                        WHERE id=${id}`;
    return dbPool.execute(SQLQuery);
}

const deleteJabatan = (id) => {
    const SQLQuery = `DELETE jabatan WHERE id=${id}`;
    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllJabatan,
    getJabatanById,
    createNewJabatan,
    updateJabatan,
    deleteJabatan,
}