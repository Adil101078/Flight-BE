import User from "../../../models/user.model";
import bcrypt from 'bcrypt'

export default async function Login(req, res){
    // const errors = await requestValidater(LoginDTO, req.body)

    // if(errors){
    //     return errors
    // }

    const { email, password } = req.body

    const __user  = await User.findOne({ where:{ email } })
    if(!__user){
        return res.send({
            error:'User not found'
        })
    }

    if(!(await bcrypt.compare(password, __user.password))){
         return res.status(404).send({
            error:'Invalid credentials'
        })
    }

    return res.send({
        __user
    })
}