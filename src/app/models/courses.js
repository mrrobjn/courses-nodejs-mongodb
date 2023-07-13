const mongoose = require('mongoose')
const slug = require('mongoose-slug-updater');
mongoose.plugin(slug);
const Schema = mongoose.Schema

const Courses = new Schema({
    name: { type: String, },
    image: { type: String },
    description: { type: String },
    slug: { type: String, slug: 'name', unique: true }
}, {
    timestamps: true,
});
module.exports = mongoose.model('Model', Courses, 'courses')