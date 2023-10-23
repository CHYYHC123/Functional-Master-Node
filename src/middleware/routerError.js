// 自定义错误处理中间件
// 404 
var createError = require('http-errors');
const errorMiddleware = (err, req, res, next) => {
  next(createError(404));
};

module.exports = errorMiddleware