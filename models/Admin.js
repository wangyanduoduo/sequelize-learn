/*
 * @Author: wy
 * @Date: 2023-10-31 14:45:37
 * @LastEditors: wy
 * @LastEditTime: 2023-10-31 15:00:55
 * @FilePath: /笔记/sequelize/models/Admin.js
 * @Description:
 */
const sequelize = require('./db');
const { DataTypes } = require('sequelize');
const Admin = sequelize.define(
  'Admin',
  {
    // 在这里定义模型属性
    loginId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    loginPwd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    paranoid: true,
  }
);

module.exports = Admin;
