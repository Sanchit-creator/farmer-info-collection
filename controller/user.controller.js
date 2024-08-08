const userService = require('../service/user.service')

module.exports.signUp = async (req, res) => {
    const result = await userService.userSignUpService(req.body);
    return res.status(result.status).json({ message: result.message, response: result.response });
};

module.exports.signIn = async (req, res) => {
    const result = await userService.userSignInService(req.body);
    return res.status(result.status).json({ message: result.message, token: result.token });
}
