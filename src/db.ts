import { Pool } from 'pg';
import 'dotenv/config';

export const pool = new Pool({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  database: process.env.POSTGRES_DB
})

// In a proper project, you'd probably want to set up your database with a migration table.
// For the purposes of this demo I'm just running a simple query.
export async function setupDatabase (): Promise<void> {
    await pool.query(`
        CREATE TABLE IF NOT EXISTS posts (
            id SERIAL PRIMARY KEY,
            name VARCHAR(128) NOT NULL,
            description TEXT
        )`);
}