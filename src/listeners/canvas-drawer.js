'use strict';

import { draw } from '../handlers/draw.js';

import { data } from '../data.js';

const canvas = document.querySelector("#draw");
canvas.addEventListener('mousedown', (e) => {
    data.isDrawing = true,
    [data.lastX,data.lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => data.isDrawing = false);
canvas.addEventListener('mouseout', () => data.isDrawing = false);