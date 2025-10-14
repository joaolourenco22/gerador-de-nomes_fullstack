const mongoose = require('mongoose');

const apelidoSchema = new mongoose.Schema({
  apelido: { type: String, required: true }
}, {
  versionKey: false
});

module.exports = mongoose.models.Apelido || mongoose.model('Apelido', apelidoSchema);