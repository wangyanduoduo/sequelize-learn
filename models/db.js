/*
 * @Author: wy
 * @Date: 2023-10-31 14:36:26
 * @LastEditors: wy
 * @LastEditTime: 2023-10-31 14:42:35
 * @FilePath: /笔记/sequelize/models/db.js
 * @Description:
 */
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('wyschool', 'root', 'root123456', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
