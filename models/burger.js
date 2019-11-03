const orm = require('../config/orm');

let burger = {
    selectAll: function (cb) {
        orm.selectAll("burgers", cb);
    },
    insertOne: function (newDataObject, cb) {
        orm.insertOne("burgers", newDataObject, cb);
    },
    updateOne: function (updatedDataObject, id, cb) {
        orm.updateOne("burgers", updatedDataObject, id, cb);
    }
};

module.exports = burger;