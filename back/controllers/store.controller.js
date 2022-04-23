const db = require('../models');
module.exports.GetProducts = async (req, res, next) => {
    try {
        const hotelData = await db.Product.findAll();
        res.send({ data: hotelData });
    } catch (err) {
        next(err);
    }
};
// module.exports.HotelBook = async (req, res, next) => {
//     try {
//         let { body:{
//             inB,outB, roomId
//         } } = req;
//         const val={
//             in : new Date(inB),
//             out : new Date(outB)
//         }
//         console.log(val)
//         const book = await db.Hotel.update(val,{where:{id:roomId}});
//         res.send({ success: book});
//     } catch (err) {
//         next(err);
//     }

