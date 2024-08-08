const { createFarmerRepository } = require("../repository/farmer.repository")

module.exports.createFarmerService = async (farmerData, path, id) => {
    try {
        const newFarmer = await createFarmerRepository(farmerData)
        if (path) {
            newFarmer.idproof = path
        }
        newFarmer.userid = id
        const response = await newFarmer.save()
        return { status: 201, message: "Created", response };
    } catch (error) {
        console.error('Error creating Farmer:', error);
        return { status: 500, message: "Something went wrong check console" };
    }
}