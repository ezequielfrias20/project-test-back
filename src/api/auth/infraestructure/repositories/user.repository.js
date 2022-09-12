import * as dbConnection from '../../../../libs/database.cjs';
const pool = dbConnection.modules.pool;
export default class UserRepository {
  async findByEmail(email) {
    const query = 'SELECT * FROM users WHERE email = $1::text LIMIT 1;';
    const values = [email];

    const result = await pool.query(query, values);
    return result.rows[0];
  }

  async findByEmailOrUsername(username) {
    const query = 'SELECT * FROM users WHERE email = $1::text OR username = $1::text LIMIT 1;';
    const values = [username];

    const result = await pool.query(query, values);
    return result.rows[0];
  }

}
