/* eslint-disable indent */
import mariadb from 'mariadb';
import '../env.js';

const configDb = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
};

const pool = mariadb.createPool(configDb);

const conectaDB = async () => {
    const conn = await pool.getConnection()
        .catch((err) => console.log(`Hubo un error en la conexión ${err}`));
    console.log('Conectado a BD con ID ', conn.threadId);
    return conn;
};

export default conectaDB();
