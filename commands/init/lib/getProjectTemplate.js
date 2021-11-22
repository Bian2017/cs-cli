/**
 * 网络请求
 */
const request = require('@cs-cli/request');

module.exports = function () {
  // 获取项目模板
  return request({ url: '/project/template' });
};
