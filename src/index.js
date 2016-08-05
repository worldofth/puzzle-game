import {canvas, options} from "./state";

function init(){
	setupCanvas();
	const bctx = canvas.bctx;

	bctx.fillStyle = "white";
	bctx.fillRect(0, 0, options.width, options.height);

	bctx.fillStyle = "green";
	bctx.fillRect(10, 10, 100, 100);
	renderBuffer();
}

function renderBuffer(){
	canvas.ctx.clearRect(0, 0, options.width, options.height);
	canvas.ctx.drawImage(canvas.buffer, 0, 0);
}

function setupCanvas(){
	canvas.canvas = document.querySelector('#canvas');
	canvas.ctx = canvas.canvas.getContext('2d');

	canvas.width = canvas.canvas.width = options.width;
	canvas.height = canvas.canvas.height = options.width;

	canvas.buffer = document.createElement('canvas');
	canvas.buffer.width = canvas.width;
	canvas.buffer.height = canvas.height;

	canvas.bctx = canvas.buffer.getContext('2d');
}

window.addEventListener('load', init);
