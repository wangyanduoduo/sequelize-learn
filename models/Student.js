/*
 * @Author: wy
 * @Date: 2023-10-31 14:58:52
 * @LastEditors: wy
 * @LastEditTime: 2023-10-31 16:59:28
 * @FilePath: /笔记/sequelize-learn/models/Student.js
 * @Description:
 */
const sequelize = require('./db');
const { DataTypes } = require('sequelize');

const Student = sequelize.define(
  'Student',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthday: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    sex: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    mobile: {
      type: DataTypes.STRING(11),
      allowNull: false,
    },
  },
  {
    paranoid: true,
  }
);

module.exports = Student;
