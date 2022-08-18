const connection = require('../db')

const selectAllQuery = (callback) => {
    connection.query("select * from employee;", (err, rows) => {
        if (err) {
            callback(err);
        } else {
            callback(rows);
        }
    })
}

const selectOneQuery = (id, callback) => {
    connection.query(`select * from employee where id='${id}';`, (err, rows) => {
        if (err) {
            callback(err);
        } else {
            callback(rows);
        }
    })
}

const insertValueQuery = (data, callback) => {
    connection.query(`insert into employee values ('${data.id}','${data.fName}','${data.lName}',${data.salary},'${data.department}','${data.joiningDate}');`, (err, rows) => {
        if (err) {
            callback(err);
        } else { callback(rows); }
    });
}

const updateValueQuery = (data, callback) => {
    connection.query(`update employee set lName='${data.lName}', salary=${data.salary}, department='${data.department}', joiningDate='${data.joiningDate}' where id='${data.id}';`, (err, rows) => {
        if (err) {
            callback(err);
        } else { callback(rows); }
    })
}

const deleteValueQuery = (id, callback) => {
    connection.query(`delete from employee where id='${id}';`, (err, rows) => {
        if (err) {
            callback(err);
        } else { callback(rows); }
    })
}

module.exports = {
    selectAllQuery: selectAllQuery,
    selectOneQuery: selectOneQuery,
    insertValueQuery: insertValueQuery,
    updateValueQuery: updateValueQuery,
    deleteValueQuery: deleteValueQuery
}