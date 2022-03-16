const Sequelize = require('sequelize');

require('dotenv').config();

//create caonnection to our db
const sequelize = new Sequelize('just_tech_news_db', 'root', 'qsxdrfvgy8426!@#/*-$', {
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;