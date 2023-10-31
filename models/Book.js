/*
 * @Author: wy
 * @Date: 2023-10-31 14:45:37
 * @LastEditors: wy
 * @LastEditTime: 2023-10-31 14:58:38
 * @FilePath: /笔记/sequelize/models/Book.js
 * @Description:
 */
const sequelize = require('./db');
const { DataTypes } = require('sequelize');
const Book = sequelize.define(
  'Book',
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    imageUrl: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    publishDate: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    paranoid: true,
  }
);

module.exports = Book;
