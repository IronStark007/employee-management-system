const client = require('../db')

const selectAllQuery = (callback) => {
    client.query('select * from employee;', (err, res) => {
        if (err) {
            callback(err);
        } else {
            callback(res.rows);
        }
        client.end();
    })
}

const selectOneQuery = (id, callback) => {
    client.query(`select * from employee where id='${id}';`, (err, res) => {
        if (err) {
            callback(err);
        } else {
            callback(res.rows);
        }
        client.end();
    })
}

const insertValueQuery = (data, callback) => {
    client.query(`insert into employee values ('${data.id}','${data.fName}','${data.lName}',${data.salary},'${data.department}','${data.joiningDate}');`, (err, res) => {
        if (err) {
            callback(err);
        } else { callback(res.rows); }
        client.end();
    });
}

const updateValueQuery = (data, callback) => {
    client.query(`update employee set lName='${data.lName}', salary=${data.salary}, department='${data.department}', joiningDate='${data.joiningDate}' where id='${data.id}';`, (err, res) => {
        if (err) {
            callback(err);
        } else { callback(res); }
        client.end();
    })
}

const deleteValueQuery = (id, callback) => {
    client.query(`delete from employee where id='${id}';`, (err, res) => {
        if (err) {
            callback(err);
        } else { callback(res); }
        client.end();
    })
}

module.exports = {
    selectAllQuery: selectAllQuery,
    selectOneQuery: selectOneQuery,
    insertValueQuery: insertValueQuery,
    updateValueQuery: updateValueQuery,
    deleteValueQuery: deleteValueQuery
}