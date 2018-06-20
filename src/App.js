import jsfeat from "jsfeat"

export default class App {
    constructor({ videoEl, canvasEl }) {
        const screen_corners = [];

        var i = 640*480;
        while(--i >= 0) {
            screen_corners[i] = new jsfeat.keypoint_t(0,0,0,0,-1);
        }

    }
}
