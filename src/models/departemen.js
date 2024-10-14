const dbPool = require('../config/database');

const getAllDepartemen = () => {
    const SQLQuery = `SELECT * FROM departemen`;
    return dbPool.execute(SQLQuery);
}

const getDepartemenById = (id) => {
    const SQLQuery = `  SELECT * FROM depatemen
                        WHERE id=${id}`;
    return dbPool.execute(SQLQuery);
}

const createNewDepartemen = (body) => {
    const SQLQuery = `  INSERT INTO departemen(nama_departemen)
                        VALUES ('${body.nama_departemen}')`;
    return dbPool.execute(SQLQuery);
}

const updateDepartemen = (body, id) => {
    const SQLQuery = `  UPDATE departemen
                        SET nama_departemen = '${body.nama_departemen}'
                        WHERE id=${id}`;
    return dbPool.execute(SQLQuery);
}

const deleteDepartemen = (id) => {
    const SQLQuery= `DELETE departemen WHERE id=${id}`;
    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllDepartemen,
    getDepartemenById,
    createNewDepartemen,
    updateDepartemen,
    deleteDepartemen,
}