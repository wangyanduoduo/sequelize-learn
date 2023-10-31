/*
 * @Author: wy
 * @Date: 2023-10-31 14:36:10
 * @LastEditors: wy
 * @LastEditTime: 2023-10-31 16:21:42
 * @FilePath: /笔记/sequelize/index.js
 * @Description:
 */
const adminService = require('./services/admin');

// adminService.addAdmin({
//   loginId: 'ww33',
//   loginPwd: '12345',
// });

// adminService.deleteAdmin(1);

adminService
  .updateAdmin(
    {
      loginId: 'ww11',
    },
    2
  )
  .then((res) => {
    console.log('===res', res);
  });
