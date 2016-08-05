const state = {
	canvas: null,
	context: null,
	width: 0,
	height: 0
};

function init(){
	state.canvas = document.querySelector('#canvas');
	state.context = state.canvas.getContext("2d");

	state.width = state.canvas.width;
	state.height = state.canvas.height;

	state.context.fillStyle = "white";
	state.context.fillRect(0, 0, state.width, state.height);

	state.context.fillStyle = "green";
	state.context.fillRect(10, 10, 100, 100);
}

window.addEventListener('load', init);
