const { createFarmerRepository, getAllFarmersRepository } = require("../repository/farmer.repository")

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

module.exports.getAllFarmersService = async () => {
    try {
        const response = await getAllFarmersRepository('userid');
        return { status: 201, message: "Farmer List", response }
    } catch (error) {
        console.error('Error creating Farmer:', error);
        return { status: 500, message: "Something went wrong check console" };
    }
}