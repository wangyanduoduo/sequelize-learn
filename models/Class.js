/*
 * @Author: wy
 * @Date: 2023-10-31 14:45:37
 * @LastEditors: wy
 * @LastEditTime: 2023-10-31 15:13:36
 * @FilePath: /笔记/sequelize/models/Class.js
 * @Description:
 */
const sequelize = require('./db');
const { DataTypes } = require('sequelize');
const Student = require('./Student');
const Class = sequelize.define(
  'Class',
  {
    // 在这里定义模型属性
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    openDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    paranoid: true,
  }
);

Class.hasMany(Student);

module.exports = Class;
