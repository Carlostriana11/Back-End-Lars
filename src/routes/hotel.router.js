const {Router} = require('express');
const { createReservation, getReservations, updateReservation, deleteReservation } = require('../controller/hotel.controller');


const router = Router();

router.post('/', createReservation);
router.get('/', getReservations);
router.patch('/:id', updateReservation);
router.delete('/:id', deleteReservation)


module.exports = router;