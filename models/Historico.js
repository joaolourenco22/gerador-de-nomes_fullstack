const mongoose = require('mongoose');

const historicoSchema = new mongoose.Schema({
  nomeCompleto: { type: String, required: true },
  criadoEm: { type: Date, required: true }
}, {
  versionKey: false
});

module.exports = mongoose.models.Historico || mongoose.model('Historico', historicoSchema);