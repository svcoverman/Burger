const connection = require('./connection.js');

let orm = {
    selectAll: function (tableName, cb) {
        let queryString = 'SELECT * FROM ??'
        connection.query(queryString, [tableName], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (tableName, newDataObject, cb) {
        let queryString = 'INSERT INTO ?? SET ?';
        connection.query(queryString, [tableName, newDataObject], function (err, result) {
            if (err) throw err;
            // console.log(result);
            cb(result);
        });
    },
    updateOne: function (tableName, updatedDataObject, id, cb) {
        let queryString = 'UPDATE ?? SET ? WHERE id = ?'
        connection.query(queryString, [tableName, updatedDataObject, id], function (err, result) {
            if (err) throw err;
            // console.log(result);
            cb(result);
        });
    }
};

module.exports = orm;