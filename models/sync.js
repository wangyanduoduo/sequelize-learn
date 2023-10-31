/*
 * @Author: wy
 * @Date: 2023-10-31 15:03:24
 * @LastEditors: wy
 * @LastEditTime: 2023-10-31 15:08:13
 * @FilePath: /笔记/sequelize/models/sync.js
 * @Description:
 */
require('./Admin');
require('./Book');
require('./Class');
require('./Student');

const sequelize = require('./db');

sequelize.sync({ force: true }).then(() => {
  console.log('所有模型均已成功同步.');
});
