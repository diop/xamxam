const pgp = require('pg-promise')()

const databaseName = 'xamxam'
const connectionString = process.env.DATABASE_URL || `postgres://localhost:5432/${databaseName}`

const database = pgp(connectionString)

module.exports = database
