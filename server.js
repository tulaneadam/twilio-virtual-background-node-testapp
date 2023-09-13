//content that can be added to app.component.ts file
const express = require('express')
const path = require('path')
const serveStatic = require('serve-static')
const net = require('net')

const app = express()

app.use(serveStatic(path.join(__dirname, 'public')))
app.use(serveStatic(path.join(__dirname, 'node_modules/twilio-video/dist/')))
app.use(serveStatic(path.join(__dirname, 'node_modules/@twilio/video-processors/dist/build')))

console.log(`0 - server started with express using public folder and twilio video node modules`);

//remaining server code

let port = 3000;

const server = app.listen(port, () => {
    console.log(`Server started on port ${port}`)
})

server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log(`Port ${port} is in use, trying with port ${port + 1}`)
        port += 1
        server.close()
        server.listen(port)
    } else {
        console.log('Server error: ', err)
    }
})