const { createFarmerService } = require("../service/farmer.service");

module.exports.createFarmerController = async (req, res) => {
    const result = await createFarmerService(req.body, req.file.path, req.user.id);
    return res.status(result.status).json({ message: result.message, response: result.response });
};