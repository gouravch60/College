const jwt = require('jsonwebtoken');
const ErrorHandler = require('../utils/ErrorHandler');
exports.adminAuth=(req,res,next)=>{
    let token = req.cookies.token;
    try{
        const verify = jwt.verify(token,process.env.ACCESS_TOKEN_KEY);
        if(!verify.role=='admin'){
            return next(new ErrorHandler('Authorization Failed',401))
        }
        req.name = verify.name;
        req.role = verify.role; 
        req.email = verify.email
        next();
    }catch(e){
        return next(new ErrorHandler('Authorization Failed',401))
    }
}