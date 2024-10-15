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
            message: 'GET absensi by id success',
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const getAbsensiByKaryawanId = async (req, res) => {
    const {id} = req.params;

    try {
        const [data] = await AbsensiModel.getAbsensiByKaryawanId(id);
        res.json({
            message: 'GET absensi by karyawan id success',
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

    if (!body.karyawan_id || !body.tanggal || !body.waktu_masuk  || !body.status_absensi) {
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

const updateAbsensi = async (req, res) => {
    const {id} = req.params;
    const {body} = req;
    const [rows] = await AbsensiModel.getWaktuKeluar(id);
    const waktuKeluar = rows[0].waktu_keluar

    console.log(waktuKeluar);
    if (waktuKeluar !== null) {
        return res.status(400).json({
            message: "karyawan sudah melakukan log out"
        })
    }
    
    if (!body.waktu_keluar) {
        return res.status(400).json({
            message: "Terdapat kesalahan pada data input"
        })
    }

    try {
        await AbsensiModel.updateAbsensi(body, id);
        res.status(201).json({
            message: 'UPDATE absensi success',
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

module.exports = {
    getAllAbsensi,
    getAbsensiById,
    getAbsensiByKaryawanId,
    createNewAbsensi,
    updateAbsensi,
}