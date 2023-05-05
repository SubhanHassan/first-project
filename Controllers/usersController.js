const {UsersModel} = require('../model');

const addUser = (body) => {
    return UsersModel.create(body);
};

const getAllUsers = (filter) => {
    return UsersModel.find(filter).sort({ _id: -1 });
};

const getUserById =(id) => {
    return UsersModel.findById(id);
}

const updateUser = (id,body) => {
    const query = {_id: id };
    return UsersModel.findOneAndUpdate(query,body,{new: true});
};


const deleteUser = (id,body) => {
    const query = {_id: id };
    return UsersModel.findByIdAndDelete(id,body, {new: true});
};

const verifyUser = (filter) => {
     return UsersModel.findOne(filter).select(['_id','name','username', 'age']);
}

module.exports = {
    addUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
    verifyUser,
};