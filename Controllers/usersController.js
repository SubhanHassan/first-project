const {UsersModel} = require('../model');

const addUser = (body) => {
    return UsersModel.create(body);
};

const getAllUsers = (filter) => {
    return UsersModel.find(filter).sort({ _id: -1 });
};


const getUserById =() => {
    return UsersModel.findById(id);
}
const updateUser = (id,body) => {
    const query = {_id: id };
    return UsersModel.findByIdAndUpdate(query,body,{new: true});
};
module.exports = {
    addUser,
    getAllUsers,
    getUserById,
    updateUser,
};