// * Helpers for casting environment variables
const castBooleanEnv = (envVar, defaultValue = false) =>
  process.env[envVar] ? process.env[envVar]?.toLowerCase() === 'true' : defaultValue
const castIntEnv = (envVar, defaultValue) =>
  parseInt(process.env[envVar], 10) || defaultValue
const castStringArrayEnv = (envVar, defaultValue = []) =>
  process.env[envVar]?.length
    ? (process.env[envVar]).split(',').map((field) => field.trim())
    : defaultValue

module.exports = { castBooleanEnv, castIntEnv, castStringArrayEnv }
