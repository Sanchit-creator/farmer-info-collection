const Farmer = require("../model/farmer")

module.exports.findFarmerRepository = async (check) => {
    return await Farmer.findOne()
}

module.exports.createFarmerRepository = async (farmerData) => {
    return await Farmer.create(farmerData)
}

module.exports.getAllFarmersRepository = async (key) => {
    return await Farmer.find().populate(key)
}