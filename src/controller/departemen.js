const DepatemenModel = require('../models/departemen');

const getAllDepartemen = async (req, res) => {
    try {
        const [data] = await DepatemenModel.getAllDepartemen();
        
        res.json({
            message: "GET all departemen success",
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const getDepartemenById = async (req, res) => {
    const {id} = req.params;

    try {
        const [data] = await DepatemenModel.getDepartemenById(id);
        res.json({
            message: 'GET departemen success',
            data: data,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const createNewDepartemen = async (req, res) => {
    const {body} = req;

    if (!body.nama_departemen) {
        res.status(400).json({
            message : "Terdapat kesalahan pada data input"
        })
    }

    try {
        await DepatemenModel.createNewDepartemen(body);
        res.status(201).json({
            message: 'CREATE new departemen success',
            data: body,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const updateDepartemen = async (req, res) => {
    const {id} = req.params;
    const {body} = req.params;

    try {
        await DepatemenModel.updateDepartemen(body, id);
        res.status(201).json({
            message: 'UPDATE departemen success',
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

const deleteDepartemen = async (req, res) => {
    const {id} = req.params;

    try {
        await DepatemenModel.deleteDepartemen(id);
        res.json({
            message: 'DELETE departemen success',
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

module.exports = {
    getAllDepartemen,
    getDepartemenById,
    createNewDepartemen,
    updateDepartemen,
    deleteDepartemen,
}