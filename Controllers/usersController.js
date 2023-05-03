const {UsersModel} = require('../model');

const addUser = (body) => {
    return UsersModel.create(body);
};

module.exports = {
    addUser
}