const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Turma extends Model {}

Turma.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Turma',
  tableName: 'turmas',
  timestamps: false,
});

module.exports = Turma;