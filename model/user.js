const mongoose = require('mongoose')
const Schema = mongoose.Schema
const joi = require('joi')

const UserSchema = new Schema({
    name: {
        type: String,
        min: 3,
        max: 255,
        required: true,
    },
    email: {
        type: String,
        max: 255,
        required: true,
    }, 
    verified: {
        type: Boolean,
        default: false,
    },
    password: {
        type: String,
        required: true,
    }
})

const User = mongoose.model('User', UserSchema)

const validate = (user) => {
    const schema = joi.object({
        name: joi.string().min(3).max(255).required(),
        email: joi.string().max(255).required().email(),
        password: joi.string().required(),
    })
    return schema.validate(user)
}

module.exports = {
    User,
    validate,
}