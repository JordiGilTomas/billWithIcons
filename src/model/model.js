import db from '../database/db.js';

const getAllProducts = async () => (await db).query('SELECT * FROM producto');


export default { getAllProducts };
