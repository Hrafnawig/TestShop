const db = require('../models');
module.exports.GetProducts = async (req, res, next) => {
    try {
        const hotelData = await db.Product.findAll();
        res.send({ data: hotelData });
    } catch (err) {
        next(err);
    }
};

module.exports.Order = async (req, res, next) => {
    try {
        let {
            body: {
                name,
                surname,
                address,
                phone
            }
        } = req;

        const val ={
            name,
            surname,
            address,
            phone
        }
        const order = await db.Order.create(val);
        res.send({success: order});
    } catch (err) {
        next(err);
    }
};
