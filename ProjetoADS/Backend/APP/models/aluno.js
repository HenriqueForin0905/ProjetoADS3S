const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Aluno extends Model {}

Aluno.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  data_nascimento: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  turma_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: 'turmas',
      key: 'id',
    },
  },
}, {
  sequelize,
  modelName: 'Aluno',
  tableName: 'alunos',
  timestamps: false,
});

module.exports = Aluno;