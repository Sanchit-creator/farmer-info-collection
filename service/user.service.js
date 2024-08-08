const { findOneUserWithEmail, createOneUser } = require("../repository/user.repository");
const generateToken = require('../util/generateToken')
const bcrypt = require('bcryptjs');


module.exports.userSignUpService = async(userData) => {
    
    try {
        const findUser = await findOneUserWithEmail(userData.email)
        if (findUser) {
            return { status: 404, message: "User Already Exist!" };
        }

        const response = await createOneUser(userData);
        return { status: 201, message: "Created", response };
    } catch (error) {
        console.error('Error creating department:', error);
        return { status: 500, message: "Something went wrong check console" };
    }
}

module.exports.userSignInService = async(userData) => {
    try {
        const user = await findOneUserWithEmail(userData.email)
        if (user) {
            let isMatch = await bcrypt.compare(userData.password, user.password);
            if (isMatch) {
                return {
                    status: 200,
                    message: "Signed In",
                    token: generateToken(user._id)
                }
            }else{
                return { status: 401, message: "No user with this credential"}
            }
        }
    } catch (error) {
        console.error('Error creating department:', error);
        return { status: 500, message: "Something went wrong check console" };
    }
}