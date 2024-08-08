const mongoose = require('mongoose');
const farmerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    fathername: {
        type:String,
        required: true
    },
    whatsappnumber: {
        type:Number,
        required: true
    },
    ownedarea: {
        type:Number,
        required: false
    },
    leasedarea: {
        type:Number,
        required: false
    },
    cropscultivated: [
        {
            type:String,
            required: false
        }
    ],
    village: {
        type:String,
        required: false
    },
    block: {
        type:String,
        required: false
    },
    tehsil: {
        type:String,
        required: false
    },
    district: {
        type:String,
        required: false
    },
    pincode: {
        type:Number,
        required: false
    },
    idprooftype: {
        type:String,
        required: true
    },
    idproof: {
        type:String,
        required: false
    },
    khasranumber: {
        type:String,
        required: false
    },
    userid : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});


const Farmer = mongoose.model('Farmer', farmerSchema);
module.exports = Farmer;