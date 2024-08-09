const { createFarmerService, getAllFarmersService } = require("../service/farmer.service");

module.exports.createFarmerController = async (req, res) => {
    const result = await createFarmerService(req.body, req.file.path, req.user.id);
    return res.status(result.status).json({ message: result.message, response: result.response });
};

module.exports.getAllFarmerController = async (req, res) => {
    const result = await getAllFarmersService();
    return res.status(result.status).json({ message: result.message, response: result.response });
};