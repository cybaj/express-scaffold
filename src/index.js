const { HOST, PORT } = require('./@shared/config')
const { app } = require('./server')

const start = async () => {
  app.listen(PORT, HOST, () => {
    if (HOST) {
      console.log(`Running on http://${HOST}:${PORT}`)
    } else {
      console.log(`Running on port ${PORT}`)
    }
  })
}

start()
