const mongoose=require('mongoose');
const bcrypt=require('bcrypt')

const userSchema = new mongoose.Schema({
    name:{type:String}
    ,email:{type:String}
    ,password:{type:String}
    ,role:{type:String}
})

userSchema.pre('save',async function(){
    this.password=await bcrypt.hash(this.password,10)

})

userSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password)
}

module.exports=new mongoose.model('User',userSchema)