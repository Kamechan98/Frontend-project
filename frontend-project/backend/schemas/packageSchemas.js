const mongoose = require('mongoose');

const packageSchema = mongoose.Schema({
    packageType: {
        type: String,
        enum: ['Budget', 'Standard', 'Deluxe'],
        required: true
    },
    // Other fields related to the package
});

module.exports = mongoose.model('Package', packageSchema);
