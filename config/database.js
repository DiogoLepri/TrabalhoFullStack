const { define } = require("mime");

module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '',
    database: 'trabalhofullstack',
    define: {
        timestamps: false,
        underscore: false
    }
};