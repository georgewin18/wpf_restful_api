const dbPool = require('../config/database');

const getAllKaryawan = () => {
    const SQLQuery = `SELECT * FROM karyawan`;
    return dbPool.execute(SQLQuery);

}

const getKaryawanById = (id) => {
    const SQLQuery = `  SELECT * FROM karyawan
                        WHERE id=${id}`;
    return dbPool.execute(SQLQuery);
}

const getKaryawanByDepartemenId = (departemenId) => {
    const SQLQuery = `SELECT * FROM karyawan WHERE departemen_id=${departemenId}`;
    return dbPool.execute(SQLQuery);
}

const getKaryawanByJabatanId = (jabatanId) => {
    const SQLQuery = `SELECT * FROM karyawan WHERE departemen_id=${jabatanId}`;
    return dbPool.execute(SQLQuery);
}

const createNewKaryawan = (body) => {
    const SQLQuery = `  INSERT INTO karyawan(nama_lengkap, email, nomor_telepon, tanggal_lahir, alamat, tanggal_masuk, departemen_id, jabatan_id, status)
                        VALUES ('${body.nama_lengkap}','${body.email}','${body.nomor_telepon}','${body.tanggal_lahir}','${body.alamat}','${body.tanggal_masuk}','${body.departemen_id}','${body.jabatan_id}','${body.status}')`
    return dbPool.execute(SQLQuery);
}

const updateKaryawan = (body, id) => {
    const SQLQuery = `  UPDATE karyawan
                        SET nama_lengkap='${body.nama_lengkap}',
                            email='${body.email}',
                            nomor_telepon='${body.nomor_telepon}',
                            tanggal_lahir='${body.tanggal_lahir}',
                            alamat='${body.alamat}',
                            tanggal_masuk='${body.tanggal_masuk}',
                            departemen_id='${body.departemen_id}',
                            jabatan_id='${body.jabatan_id}',
                            status='${body.status}'
                        WHERE id=${id}`;
    return dbPool.execute(SQLQuery);
}

const deleteKaryawan = (id) => {
    const SQLQuery = `DELETE FROM karyawan WHERE id=${id}`;
    return dbPool.execute(SQLQuery);
}

module.exports = {
    getAllKaryawan,
    getKaryawanById,
    getKaryawanByDepartemenId,
    getKaryawanByJabatanId,
    createNewKaryawan,
    updateKaryawan,
    deleteKaryawan,
}