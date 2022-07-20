class CustumErrorApiClass extends Error{
    constructor(message, statusCode) {
        super(message)
        this.statusCode =statusCode
    }
}

const creatMyError = (msg, statusCode)=>{
    return new CustumErrorApiClass(msg,statusCode)
}

module.exports={CustumErrorApiClass,creatMyError}