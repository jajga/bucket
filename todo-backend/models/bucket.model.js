const mongoose = require('mongoose');

const BucketSchema = mongoose.Schema({
    bucketName: {
    	type : String,
    	unique:true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Bucket', BucketSchema);