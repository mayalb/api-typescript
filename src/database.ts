import { Sequelize } from "sequelize-typescript";
import { Pool } from "pg";
export const pool = new Pool({
    host: 'localhost',
    user: 'celluloid',
    password: 'ensma',
    database: 'celluloid',
    port: 5432

})
//export const sequelize= new Sequelize('celluloid', 'celluloid', 'ensma',{
   // host: 'localhost',
   // dialect: 'postgres',
   // models: [__dirname + 'models']
  // user: 

//});