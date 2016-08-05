import {canvas, options} from "./state";

function init(){
	setupCanvas();

	canvas.bufferContext.fillStyle = "white";
	canvas.bufferContext.fillRect(0, 0, options.width, options.height);

	canvas.bufferContext.fillStyle = "green";
	canvas.bufferContext.fillRect(10, 10, 100, 100);

	canvas.context.clearRect(0, 0, options.width, options.height);
	canvas.context.drawImage(canvas.buffer, 0, 0);
}

function setupCanvas(){
	canvas.element = document.querySelector('#canvas');
	canvas.context = canvas.element.getContext('2d');

	canvas.width = canvas.element.width = options.width;
	canvas.height = canvas.element.height = options.width;

	canvas.buffer = document.createElement('canvas');
	canvas.buffer.width = canvas.width;
	canvas.buffer.height = canvas.height;

	canvas.bufferContext = canvas.buffer.getContext('2d');
}

window.addEventListener('load', init);
