const GajiModel = require('../models/gaji');

const getAllGaji = async (req, res) => {
    try {
        const [data] = await GajiModel.getAllGaji();
        
        res.json({
            message: 'GET all gaji success',
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const getGajiById = async (req, res) => {
    const {id} = req.params;

    try {
        const [data] = await GajiModel.getGajiById(id);
        res.json({
            message: 'GET gaji by id success',
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const getGajiByKaryawanId = async (req, res) => {
    const {id} = req.params;

    try {
        const [data] = await GajiModel.getGajiByKaryawanId(id);
        res.json({
            message: 'GET gaji by karyawan id success',
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const createNewGaji = async (req, res) => {
    const {body} = req;

    if (!body.karyawan_id || !body.bulan || !body.gaji_pokok || !body.tunjangan || !body.potongan || !body.total_gaji) {
        res.status(400).json({
            message: "Terdapat kesalahan pada data input"
        })
    }
    
    try {
        await GajiModel.createNewGaji(body);
        res.status(201).json({
            message: 'CREATE new gaji success',
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
    getAllGaji,
    getGajiById,
    getGajiByKaryawanId,
    createNewGaji,
}