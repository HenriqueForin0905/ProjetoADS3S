const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Nota extends Model {}

Nota.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  aluno_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'alunos',
      key: 'id',
    },
  },
  materia_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'materias',
      key: 'id',
    },
  },
  bimestre: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nota: {
    type: DataTypes.DECIMAL(5, 2),
    allowNull: false,
  },
}, {
  sequelize,
  modelName: 'Nota',
  tableName: 'notas',
  timestamps: false,
});

module.exports = Nota;