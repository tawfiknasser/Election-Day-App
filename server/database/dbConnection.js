const { Pool } = require('pg');
require('env2')('./config.env');

const { ELECTION_DAY_DB_URL } = process.env;

if (!ELECTION_DAY_DB_URL) throw new Error('Enviroment variable ELECTION_DAY_DB_URL must be set');

const options = {
  connectionString: ELECTION_DAY_DB_URL,
};

module.exports = new Pool(options);
