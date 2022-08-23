const dbHandler = require('../services/employee')


const getAllEmployees = (req, res) => {
    dbHandler.selectAllQuery((result) => {
        if (result instanceof Error) {
            res.status(500).send({ "error": result.detail })
        } else {
            res.send(result);
        }
    })
}

const getOneEmployee = (req, res) => {
    dbHandler.selectOneQuery((req.params.id), (result) => {
        if (result instanceof Error) {
            res.status(500).send({ "error": result.detail })
        } else if (result.length === 0) {
            res.status(500).send({ "error": `Employee with the id '${req.params.id}' does not exist` })
        } else {
            res.send(result);
        }
    })
}

const createEmployee = (req, res) => {
    dbHandler.insertValueQuery((req.body), (result) => {
        if (result instanceof Error) {
            if (result.code === '23505'){
                res.status(500).send({ "error": `Employee with the id '${req.body.id}' already exists` })
            }else{
            res.status(500).send({ "error": result.detail })
        }    
        } else {
            res.status(201).send({ "message": `Employee with the id '${req.body.id}' created` })
        }
    })
}

const updateEmployee = (req, res) => {
    dbHandler.updateValueQuery((req.body), (result) => {
        if (result instanceof Error) {
            res.status(500).send({ "error": result.detail })
        }else if (result.rowCount === 0) {
            res.status(500).send({ "error": `Employee with the id '${req.body.id}' does not exist` })
        } 
        else {
            res.send({ "message": `Employee with the id '${req.body.id}' updated` })
        }
    })
}

const deleteEmployee = (req, res) => {
    dbHandler.deleteValueQuery((req.params.id), (result) => {
        if (result instanceof Error) {
            res.status(500).send({ "error": result.detail })
        }
        else if (result.rowCount === 0) {
            res.status(500).send({ "error": `Employee with the id '${req.params.id}' does not exist` })
        } else {
            res.send({ "message": `Employee with the id '${req.params.id}' deleted` })
        }
    })
}

module.exports = {
    getAllEmployees: getAllEmployees,
    getOneEmployee: getOneEmployee,
    createEmployee: createEmployee,
    updateEmployee: updateEmployee,
    deleteEmployee: deleteEmployee
}