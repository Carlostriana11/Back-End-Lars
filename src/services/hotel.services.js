const hotelModel = require("../models/Hotel")

const  createOneReservation = async ( newProduct )=>{
    return await hotelModel.create( newProduct );   
}
const getAllReservation = async () =>{
    return await hotelModel.find();
}

const updateOneReservation = async ( idTask, updateTask) => {
    return await hotelModel.findOneAndUpdate({_id: idTask}, updateTask, {new: true});
}
const deleteOneReservation = async (idTask) =>{
    return await hotelModel.findByIdAndDelete(idTask);
}
module.exports = {
    createOneReservation,
    getAllReservation,
    updateOneReservation,
    deleteOneReservation
}