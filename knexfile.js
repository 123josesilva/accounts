// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
const config = {

  client: 'mysql2',
  connection: {
    database: 'accounts',
    user: 'usuario',
    password: 'senha'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
}; 

export default config; 