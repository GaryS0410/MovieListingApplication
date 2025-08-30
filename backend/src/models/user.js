import mongoose from "mongoose";
import bcrypt from "bcrypt";

const userSchema = new mongoose.Schema({
    // Users firstname 
    username: {
        type: String,
        required: true,
    },

    // Users email 
    email: {
        type: String, 
        required: true, 
        unique: true, 
        lowercase: true,
    },

    // Users password
    password: {
        type: String, 
        required: true,
    },

    // Date of user creation, set automatically by Mongoose
    createdAt: {
        type: Date, 
        default: Date.now,
    },

});

userSchema.pre('save', async function (next) {
    const user = this;
    if (!user.isModified('password')) return next;

    try {
        const salt = await bcrypt.genSalt();
        user.password = await bcrypt.hash(user.password, salt);
        next();
    } catch (error) {
        return next(error);
    };

userSchema.methods.comparePassword = async function (password) {
    return bcrypt.compare(password, this.password);
}
})

// Creates and exports the Mongoose model based on the schema
const User = mongoose.model('User', userSchema);

export default User;