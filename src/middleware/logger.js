const fs = require('fs');

function loggerMiddleware(req, res, next) {
  const { method, url, ip } = req;
  const currentTime = new Date().toISOString();
  const logEntry = `${currentTime} - ${ip} - ${method} ${url}\n`;

  fs.appendFile('logs.txt', logEntry, err => {
    if (err) {
      console.error('Failed to write log:', err);
    }
  });

  next();
}

module.exports = loggerMiddleware