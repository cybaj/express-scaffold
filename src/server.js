// import { COOKIE_SECRET, AUTH_HAS_ONE_PROVIDER } from '@shared/config'
// import cookieParser from 'cookie-parser'
const cors = require('cors')
const { errors } = require('./errors')
const express = require('express')
// import fileUpload from 'express-fileupload'
const helmet = require('helmet')
const { json, urlencoded } = require('body-parser')
const morgan = require('morgan')
// import { limiter } from './limiter'
const router = require('./routes')
// import passport from 'passport'

const app = express()

if (process.env.NODE_ENV === 'production') {
  // app.use(limiter)
}

app.use(
  morgan(
    ':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length]'
  )
)
app.use(helmet())
app.use(json({ limit: '50mb' }))
app.use(urlencoded({ extended: true, limit: '50mb' }))
// app.use(
//   fileUpload({
//     limits: {
//       fieldNameSize: 200,
//       fieldSize: 50 * 1024 * 1024,
//       fileSize: 50 * 1024 * 1024
//     },
//     abortOnLimit: true
//   })
// )
app.use(cors({ credentials: true, origin: true }))

app.use(router)
app.use(errors)

module.exports = { app }
