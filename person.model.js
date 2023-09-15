const mongoose = require('mongoose');
const slugify = require('slugify');

const PersonSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'] 
    },
    slug: String,
    role: {
        type: String,
        default: 'user'
    },
    // state: {
    //     type: String,
    //     required: [true, "Please add State"]
    // },
    // address: {
    //     type: String,
    //     required: [true, 'Please add address']
    // },
    // occupation: {
    //     type: String,
    //     required: [true, "Please, add "]
    // },
    // annualSalary: {
    //     type: String
    // },
    // monthlySalary: {
    //     type: String
    // }
});

PersonSchema.pre('save', function(next){
    this.slug = slugify(this.name, {lower: true})
    next();
});

module.exports = mongoose.model('Person', PersonSchema);