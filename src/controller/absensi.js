const AbsensiModel = require('../models/absensi');

const getAllAbsensi = async (req, res) => {
    try {
        const [data] = await AbsensiModel.getAllAbsensi();

        res.json({
            message: 'GET all absensi success',
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const getAbsensiById = async (req, res) => {
    const {id} = req.params;

    try {
        const [data] = await AbsensiModel.getAbsensiById(id);
        res.json({
            message: 'GET absensi success',
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const createNewAbsensi = async (req, res) => {
    const {body} = req;

    if (!body.karyawan_id || !body.tanggal || !body.waktu_masuk || !body.waktu_keluar || !body.status_absensi) {
        res.status(400).json({
            message: "Terdapat kesalahan pada data input"
        })
    }

    try {
        await AbsensiModel.createNewAbsensi(body);
        res.status(201).json({
            message: 'CREATE new absensi success',
            data: body,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

module.exports = {
    getAllAbsensi,
    getAbsensiById,
    createNewAbsensi,
}