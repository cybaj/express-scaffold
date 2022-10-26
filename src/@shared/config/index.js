// ! Keep dotent.config at the very beginning of the file!!!
const dotenv = require('dotenv')
const Boom = require('@hapi/boom')

// Load '.env' file if production mode, '.env.<NODE_ENV>' otherwise
const envFile =
  process.env.NODE_ENV && process.env.NODE_ENV !== 'production'
    ? `.env.${process.env.NODE_ENV}`
    : '.env'
dotenv.config({ path: envFile })

const { castIntEnv } = require('./utils')

/**
 * * Application Settings
 */
const {
  REDIRECT_URL_ERROR,
  REDIRECT_URL_SUCCESS,
  HASURA_GRAPHQL_ADMIN_SECRET,
  HOST = ''
} = process.env
const SERVER_URL = process.env.SERVER_URL || ''
const PORT = castIntEnv('PORT', 3000)
const HASURA_ENDPOINT = process.env.HASURA_ENDPOINT

/**
 * * Rate limiter settings
 */
const MAX_REQUESTS = castIntEnv('MAX_REQUESTS', 1000)
const TIME_FRAME = castIntEnv('TIME_FRAME', 15 * 60 * 1000)

module.exports = { REDIRECT_URL_SUCCESS, REDIRECT_URL_ERROR, HASURA_GRAPHQL_ADMIN_SECRET, HOST, SERVER_URL, PORT, HASURA_ENDPOINT, MAX_REQUESTS, TIME_FRAME }

/**
 * * Check required settings, and raise an error if some are missing.
 */
if (!HASURA_ENDPOINT) {
  throw Boom.badImplementation('No Hasura GraphQL endpoint found.')
}
