const express = require('express')
const app = express()

let isDisableKeepAlive = false
app.use(function (req, res, next) {
  if (isDisableKeepAlive) {
    // disconnect keep alive connection
    res.set('Connection', 'close')
  }
  next()
})

app.get('/', function (req, res) {
  res.send('hello world!')
})

const listener = app.listen(4000, function () {
  console.log('Listening on port ' + listener.address().port)
  // Graceful start
  process.send('ready')
})

// Graceful Shutdown
process.on('SIGINT', function () {
  // Graceful Stop
  isDisableKeepAlive = true
  app.close(function () {
    console.log('server closed')
    // db.stop(function (err) {
    //   process.exit(err ? 1 : 0)
    // })
    process.exit(0)
  })
})
