import * as dbConnection from '../../../../libs/database.cjs';
const pool = dbConnection.modules.pool;

export default class BillsRepository {
  async getBills() {
    const query = 'SELECT * FROM bill;';
    const result = await pool.query(query);
    return result.rows;
  }
  
  async createBill(body) {
    const query =
        'INSERT INTO bill (value, type, observation ) VALUES ($1, $2, $3) RETURNING *;';
    const values = [body.value, body.type, body.observation ];
    const result = await pool.query(query, values);
    return result.rows[0];
  }
  async updateBill(id, body){
    let query = 'UPDATE bill SET '
    body.value ? query += `value='${body.value}',` : null;
    body.type ? query += `type='${body.type}',` : null;
    body.observation ? query += `observation='${body.observation}'` : null;
    query += ` WHERE id = ${id}::integer RETURNING *;`; 
    const result = await pool.query(query);
    return result.rows[0];
  }
  async deleteBill(id) {
    const query = 
    'DELETE FROM bill WHERE id = $1::integer RETURNING *;';
    const values = [id];
    const result = await pool.query(query, values);
    return result.rows[0];
  }
}
