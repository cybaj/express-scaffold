const { castIntEnv } = require('../utils')

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
