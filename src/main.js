import App from "./App.js"

const videoEl = document.createElement("video")
videoEl.setAttribute("width", 640)
videoEl.setAttribute("height", 480)
document.body.appendChild(videoEl)

const canvasEl = document.createElement("canvas")
canvasEl.setAttribute("width", 640)
canvasEl.setAttribute("height", 480)
document.body.appendChild(canvasEl)

const app = new App({
    videoEl: videoEl,
    canvasEl: canvasEl
})
