const JabatanModel = require('../models/jabatan');

const getAllJabatan = async (req, res) => {
    try {
        const [data] = await JabatanModel.getAllJabatan();

        res.json({
            message: 'GET all jabatan success',
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const getJabatanById = async (req, res) => {
    const {id} = req.params;

    try {
        const [data] = await JabatanModel.getJabatanById(id);
        res.json({
            message: 'GET jabatan success',
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const createNewJabatan = async (req, res) => {
    const {body} = req;

    if (!body.nama_jabatan) {
        res.status(400).json({
            message: "Terdapat kesalahan pada data input"
        })
    }
    
    try {
        await JabatanModel.createNewJabatan(body);
        res.status(201).json({
            message: 'CREATE new jabatan success',
            data: body,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}


const updateJabatan = async(req, res) => {
    const {id} = req.params;
    const {body} = req.params;

    try {
        await JabatanModel.updateJabatan(body, id);
        res.status(201).json({
            message: 'UPDATE jabatan success',
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

const deleteJabatan = async (req, res) => {
    const {id} = req.params;
    
    try {
        await JabatanModel.deleteJabatan(id);
        res.json({
            message: 'DELETE jabatan success',
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

module.exports = {
    getAllJabatan,
    getJabatanById,
    createNewJabatan,
    updateJabatan,
    deleteJabatan,
}