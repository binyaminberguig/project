const mongoose = require('mongoose');

const cinemaSchema = mongoose.Schema({
    idFilm: {type:String, required:true},
    idUser: {type:String, required:true},
    date: {type:String, required:true},
    nbPlace: {type:BigInt(), required:true},
})

module.exports = mongoose.model('Reservation', cinemaSchema);
