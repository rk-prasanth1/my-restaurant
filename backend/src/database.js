const { Client } = require('pg');

const client = new Client({
  user: 'postgres',
  host: 'db', // This should be the service name in Docker or Kubernetes
  database: 'restaurant',
  password: 'password',
  port: 5432,
});

client.connect()
  .then(() => console.log('Connected to PostgreSQL database'))
  .catch(err => console.error('Connection error', err.stack));

module.exports = client;

