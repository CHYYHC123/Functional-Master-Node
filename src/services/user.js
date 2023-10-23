const token = {
  admin: 'admin',
  chy: 'editor'
};

const users = {
  admin: {
    id: 1,
    name: '大脸怪(admin)',
    avatar: 'https://assets.qszone.com/images/avatar.jpg',
    email: 'Ronnie@123.com',
    role: ['admin']
  },
  editor: {
    id: 2,
    name: '大脸怪(editor)',
    avatar: 'https://assets.qszone.com/images/avatar.jpg',
    email: 'Ronnie@123.com',
    role: ['editor']
  },
  guest: {
    id: 3,
    name: '访客(guest)',
    avatar: 'https://assets.qszone.com/images/avatar.jpg',
    role: []
  }
};

function userLogin(name, password) {
  if (['admin', 'chy'].includes(name) && password === '123456') {
    return {
      code: 0,
      data: {
        token: token[name]
      },
      msg: 'success'
    };
  }
}

function userInfo(name) {
  return {
    code: 0,
    data: {
      token: users['admin']
    },
    msg: 'success'
  };
}

module.exports = {
  userLogin,
  userInfo
};
