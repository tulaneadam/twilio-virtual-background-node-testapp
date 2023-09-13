install dependencies:
nvm use 14 && npm i express path serve-static net

run with:
nvm use 14 && npm i && node server.js

then navigate to http://localhost:3000

working example/version link:
https://github.com/miguelgrinberg/twilio-video-backgrounds

OR

Quickstart with:
nvm use 14 && npm i && node server.js


-------
console logs when the enable cam/mic button works properly:

index.js:1 1 - page loaded with enable cam/mic button
index.js:3 2 - button clicked to start showlocalvideo function
index.js:9 3 - video track created
index.js:11 4 - video track attached to video component/element
index.js:20 5 - image initialized as [object HTMLImageElement]
index.js:33 8 - add virtual background function comppleted
index.js:22 6 - image loaded as [object HTMLImageElement]
tflite-simd-1-0-0.js:9 [WASM] Loading model of size: 249792
index.js:31 7 - virtual background processor added as [object Object]