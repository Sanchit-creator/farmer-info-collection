const User = require("../model/user");

module.exports.findOneUserWithEmail = async (email) => {
    return await User.findOne({email: email})
}

module.exports.createOneUser = async (body) => {
    return await User.create(body)
}
