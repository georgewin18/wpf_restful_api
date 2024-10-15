const KaryawanModel = require('../models/karyawan');

const getAllKaryawan = async (req, res) => {
    try {
        const [data] = await KaryawanModel.getAllKaryawan();

        res.json({
            message: 'GET all karyawan success',
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const getKaryawanById = async (req, res) => {
    const {id} = req.params;

    try {
        const [data] = await KaryawanModel.getKaryawanById(id);
        res.json({
            message: 'GET karyawan by id success',
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const getKaryawanByDepartemenId = async (req, res) => {
    const {id} = req.params;

    try {
        const [data] = await KaryawanModel.getKaryawanByDepartemenId(id);
        res.json({
            message: 'GET karyawan by departemen id success',
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const getKaryawanByJabatanId = async (req, res) => {
    const {id} = req.params;

    try {
        const [data] = await KaryawanModel.getKaryawanByJabatanId(id);
        res.json({
            message: 'GET karyawan by jabatan id success',
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const createNewKaryawan = async (req, res) => {
    const {body} = req;

    if (!body.nama_lengkap || !body.email || !body.nomor_telepon || !body.tanggal_lahir || !body.alamat 
        || !body.tanggal_masuk || !body.departemen_id || !body.jabatan_id || !body.status) {
        res.status(400).json({
            message: "Terdapat kesalahan pada data input"
        })
    }

    try {
        await KaryawanModel.createNewKaryawan(body);
        res.status(201).json({
            message: 'CREATE new karyawan success',
            data: body,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const updateKaryawan = async (req, res) => {
    const {id} = req.params;
    const {body} = req;

    try {
        await KaryawanModel.updateKaryawan(body, id);
        res.status(201).json({
            message: 'UPDATE karyawan success',
            data : {
                id: id,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }

}

const deleteKaryawan = async (req, res) => {
    const {id} = req.params;

    try {
        await KaryawanModel.deleteKaryawan(id);
        res.json({
            message: 'DELETE karyawan success',
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
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