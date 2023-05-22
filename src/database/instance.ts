require('dotenv').config();
const Sequelize = require('sequelize');

const seq = new Sequelize(process.env.DB_NAME, process.env.USER_DB, process.env.PASSWORD_DB, {  // create a new instance of sequelize
  host: 'localhost',
  dialect: 'mysql',
});
export default seq;
