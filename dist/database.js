"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool = void 0;
var pg_1 = require("pg");
exports.pool = new pg_1.Pool({
    host: 'localhost',
    user: 'celluloid',
    password: 'ensma',
    database: 'celluloid',
    port: 5432
});
//export const sequelize= new Sequelize('celluloid', 'celluloid', 'ensma',{
// host: 'localhost',
// dialect: 'postgres',
// models: [__dirname + 'models']
// user: 
//});
