const Sequelize = require('sequelize');

require('dotenv').config();

const password = 'qsxdrfvgy8426!@#/*-$';

let sequelize;

//create caonnection to our db
if(process.env.JAWSDB_URL){
    sequelize = new Sequelize(process.env.JAWSDB_URL);
}else{
    sequelize = new Sequelize(process.env.just_tech_news_db, process.env.root, process.env.password,{
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    });

        
}


module.exports = sequelize;