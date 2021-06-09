// server.js
const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./mockup-db.json');
const middlewares = jsonServer.defaults();
const faker = require('faker');

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('./mockup-db.json');
const db = low(adapter);

server.use(middlewares);

server.get('/stories', (req, res) => {
  let num = 0;
  let arr = [];
  while (num < 10) {
    arr.push({
      name: faker.name.findName(),
      imageUri: faker.image.avatar(),
    });
    num++;
  }
  const data = {
    code: '2000',
    message: 'success',
    data: arr,
  };
  res.status(200).jsonp(data);
});

//add Route
server.post('/email', (req, res) => {
  let limitCount = db.get('email.limit').value();
  if (limitCount > 0) {
    limitCount--;
    db.set('email', {limit: limitCount, serial: createSerial()}).write();
    const data = {
      code: '2000',
      message: 'success',
    };
    res.status(200).jsonp(data);
  } else {
    const data = {
      code: '4000',
      message: 'fail',
    };
    res.status(400).jsonp(data);
  }
});

server.get('/actions/logs', (req, res) => {
  try {
    const logData = db.get('log').value();
    const {limit, offset, category} = req.query;
    const filterd = logData.filter(v => v.id === category);
    if (filterd.length !== 1) throw new Error(400);
    console.log(limit, offset, category);
    const data = {
      code: '2000',
      data: filterd[0].logs.slice(
        Number(offset),
        Number(limit) + Number(offset),
      ),
      total: filterd[0].logs.length,
      message: 'success',
    };
    res.status(200).jsonp(data);
  } catch (err) {
    const data = {
      code: '4000',
      message: 'fail',
    };
    res.status(err.message).jsonp(data);
    console.log('err', err);
  }
});

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});

function createSerial() {
  let res = '';
  for (let i = 0; i < 6; i++) {
    res += Math.floor(Math.random() * 10).toString();
  }
  return res;
}
