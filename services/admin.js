/*
 * @Author: wy
 * @Date: 2023-10-31 15:43:27
 * @LastEditors: wy
 * @LastEditTime: 2023-10-31 16:59:26
 * @FilePath: /笔记/sequelize-learn/services/admin.js
 * @Description:
 */
const Admin = require('../models/Admin');

exports.addAdmin = async (obj) => {
  const res = await Admin.create(obj);
  return res.toJSON();
};

exports.deleteAdmin = async (id) => {
  // 查询是否存在
  // 方式1
  // const ins = await Admin.findByPk(id);

  // if (ins) {
  //   await ins.destroy();
  // }
  Admin.destroy({
    where: {
      id,
    },
  });
};

exports.updateAdmin = async (obj, id) => {
  const res = await Admin.update(obj, {
    where: {
      id,
    },
  });
  return res;
};
