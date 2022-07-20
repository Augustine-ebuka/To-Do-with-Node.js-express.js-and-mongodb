const{CustumErrorApiClass}=require('../errors/errorClass')
const errorHandler = (err, req, res, next) => {
    if (err instanceof CustumErrorApiClass) {
        return res.status(err.statusCode).json({msg:err.message})
    }
    res.status(500).json({msg:"this is a custom error: Something went wrong"})
}

module.exports = errorHandler