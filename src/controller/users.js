const UsersModel = require('../models/users');

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers();

        res.json({
            message: 'GET all users success',
            data: data
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const createNewUser = async (req, res) => {
    const {body} = req;
    
    if (!body.email || !body.name || !body.address) {
        return res.status(400).json({
            message: "Terdapat kesalahan pada data input",
        })
    }

    try {
        await UsersModel.createNewUser(body);   
        res.status(201).json({
            message: 'CREATE new user sucess',
            data: body,
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

const updateUser = async (req, res) => {
    const {id} = req.params;
    const {body} = req;

    try {
        await UsersModel.updateUser(body, id)
        res.status(201).json({
            message: 'UPDATE user success',
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

const deleteUser = async (req, res) => {
    const {id} = req.params;

    try {
        await UsersModel.deleteUser(id);
        res.json({
            message: 'DELETE user success',
        })
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error,
        })
    }
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}
