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
    }
});

PersonSchema.pre('save', function(next){
    this.slug = slugify(this.name, {lower: true})
    next();
});

module.exports = mongoose.model('Person', PersonSchema);