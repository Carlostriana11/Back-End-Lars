const { createOneReservation, getAllReservation, updateOneReservation, deleteOneReservation } = require("../services/hotel.services");

const createReservation = async (req, res) =>{
    const newProduct = req.body;
    //aqui voy a invocar el servicio
    try {
        const ProductRegistered = await createOneReservation(newProduct)
        res.json({
            ok: true,
            data: ProductRegistered
            })

    } catch (error) {
        console.log( error );
        res.json({
            ok:false,
            msg:'falla al registrar la Reserva'
        });
    }
}

const getReservations = async (req, res) =>{
    try {
        const data = await getAllReservation();
        res.json({
            ok:true,
            data
        })
    } catch (error) {
        console.error(error);
        res.json({
            ok:false,
            msg:"Error al optener la reserva "
        })
    }
} 

const updateReservation = async (req, res) =>{
    const id = req.params.id
    const inputData = req.body

    try {
        const data = await updateOneReservation(id, inputData);
        res.json({
            ok: true,
            data
        })
    } catch (error) {
        console.error(error);
        res.json({
            ok:false,
            msg:"Error al editar la reserva"
        })
    }

}

const deleteReservation = async(req, res) =>{
    const id = req.params.id;
    try {
        const data = await deleteOneReservation(id);
        res.json({
            ok:true,
            data
        })
    } catch (error) {
        console.error(error);
        res.json({
            ok:false,
        msg:"Error al eliminar la reserva"
        })
    }
}
module.exports = {
    createReservation,
    getReservations,
    updateReservation,
    deleteReservation
}