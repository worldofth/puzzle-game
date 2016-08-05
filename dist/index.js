(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _state = require("./state");

function init() {
	setupCanvas();
	var bctx = _state.canvas.bctx;

	bctx.fillStyle = "white";
	bctx.fillRect(0, 0, _state.options.width, _state.options.height);

	bctx.fillStyle = "green";
	bctx.fillRect(10, 10, 100, 100);
	renderBuffer();
}

function renderBuffer() {
	_state.canvas.ctx.clearRect(0, 0, _state.options.width, _state.options.height);
	_state.canvas.ctx.drawImage(_state.canvas.buffer, 0, 0);
}

function setupCanvas() {
	_state.canvas.canvas = document.querySelector('#canvas');
	_state.canvas.ctx = _state.canvas.canvas.getContext('2d');

	_state.canvas.width = _state.canvas.canvas.width = _state.options.width;
	_state.canvas.height = _state.canvas.canvas.height = _state.options.width;

	_state.canvas.buffer = document.createElement('canvas');
	_state.canvas.buffer.width = _state.canvas.width;
	_state.canvas.buffer.height = _state.canvas.height;

	_state.canvas.bctx = _state.canvas.buffer.getContext('2d');
}

window.addEventListener('load', init);

},{"./state":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var canvas = {
	canvas: null,
	ctx: null,

	buffer: null,
	bctx: null,

	width: 0,
	height: 0
};

var options = {
	width: 800,
	height: 600,
	scaleX: 1,
	scaleY: 1
};

exports.canvas = canvas;
exports.options = options;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGluZGV4LmpzIiwic3JjXFxzdGF0ZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7O0FBRUEsU0FBUyxJQUFULEdBQWU7QUFDZDtBQUNBLEtBQU0sT0FBTyxjQUFPLElBQXBCOztBQUVBLE1BQUssU0FBTCxHQUFpQixPQUFqQjtBQUNBLE1BQUssUUFBTCxDQUFjLENBQWQsRUFBaUIsQ0FBakIsRUFBb0IsZUFBUSxLQUE1QixFQUFtQyxlQUFRLE1BQTNDOztBQUVBLE1BQUssU0FBTCxHQUFpQixPQUFqQjtBQUNBLE1BQUssUUFBTCxDQUFjLEVBQWQsRUFBa0IsRUFBbEIsRUFBc0IsR0FBdEIsRUFBMkIsR0FBM0I7QUFDQTtBQUNBOztBQUVELFNBQVMsWUFBVCxHQUF1QjtBQUN0QixlQUFPLEdBQVAsQ0FBVyxTQUFYLENBQXFCLENBQXJCLEVBQXdCLENBQXhCLEVBQTJCLGVBQVEsS0FBbkMsRUFBMEMsZUFBUSxNQUFsRDtBQUNBLGVBQU8sR0FBUCxDQUFXLFNBQVgsQ0FBcUIsY0FBTyxNQUE1QixFQUFvQyxDQUFwQyxFQUF1QyxDQUF2QztBQUNBOztBQUVELFNBQVMsV0FBVCxHQUFzQjtBQUNyQixlQUFPLE1BQVAsR0FBZ0IsU0FBUyxhQUFULENBQXVCLFNBQXZCLENBQWhCO0FBQ0EsZUFBTyxHQUFQLEdBQWEsY0FBTyxNQUFQLENBQWMsVUFBZCxDQUF5QixJQUF6QixDQUFiOztBQUVBLGVBQU8sS0FBUCxHQUFlLGNBQU8sTUFBUCxDQUFjLEtBQWQsR0FBc0IsZUFBUSxLQUE3QztBQUNBLGVBQU8sTUFBUCxHQUFnQixjQUFPLE1BQVAsQ0FBYyxNQUFkLEdBQXVCLGVBQVEsS0FBL0M7O0FBRUEsZUFBTyxNQUFQLEdBQWdCLFNBQVMsYUFBVCxDQUF1QixRQUF2QixDQUFoQjtBQUNBLGVBQU8sTUFBUCxDQUFjLEtBQWQsR0FBc0IsY0FBTyxLQUE3QjtBQUNBLGVBQU8sTUFBUCxDQUFjLE1BQWQsR0FBdUIsY0FBTyxNQUE5Qjs7QUFFQSxlQUFPLElBQVAsR0FBYyxjQUFPLE1BQVAsQ0FBYyxVQUFkLENBQXlCLElBQXpCLENBQWQ7QUFDQTs7QUFFRCxPQUFPLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLElBQWhDOzs7Ozs7OztBQ2pDQSxJQUFNLFNBQVM7QUFDZCxTQUFRLElBRE07QUFFZCxNQUFLLElBRlM7O0FBSWQsU0FBUSxJQUpNO0FBS2QsT0FBTSxJQUxROztBQU9kLFFBQU8sQ0FQTztBQVFkLFNBQVE7QUFSTSxDQUFmOztBQVdBLElBQU0sVUFBVTtBQUNmLFFBQU8sR0FEUTtBQUVmLFNBQVEsR0FGTztBQUdmLFNBQVEsQ0FITztBQUlmLFNBQVE7QUFKTyxDQUFoQjs7UUFPUSxNLEdBQUEsTTtRQUFRLE8sR0FBQSxPIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCB7Y2FudmFzLCBvcHRpb25zfSBmcm9tIFwiLi9zdGF0ZVwiO1xuXG5mdW5jdGlvbiBpbml0KCl7XG5cdHNldHVwQ2FudmFzKCk7XG5cdGNvbnN0IGJjdHggPSBjYW52YXMuYmN0eDtcblxuXHRiY3R4LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcblx0YmN0eC5maWxsUmVjdCgwLCAwLCBvcHRpb25zLndpZHRoLCBvcHRpb25zLmhlaWdodCk7XG5cblx0YmN0eC5maWxsU3R5bGUgPSBcImdyZWVuXCI7XG5cdGJjdHguZmlsbFJlY3QoMTAsIDEwLCAxMDAsIDEwMCk7XG5cdHJlbmRlckJ1ZmZlcigpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJCdWZmZXIoKXtcblx0Y2FudmFzLmN0eC5jbGVhclJlY3QoMCwgMCwgb3B0aW9ucy53aWR0aCwgb3B0aW9ucy5oZWlnaHQpO1xuXHRjYW52YXMuY3R4LmRyYXdJbWFnZShjYW52YXMuYnVmZmVyLCAwLCAwKTtcbn1cblxuZnVuY3Rpb24gc2V0dXBDYW52YXMoKXtcblx0Y2FudmFzLmNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW52YXMnKTtcblx0Y2FudmFzLmN0eCA9IGNhbnZhcy5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcblxuXHRjYW52YXMud2lkdGggPSBjYW52YXMuY2FudmFzLndpZHRoID0gb3B0aW9ucy53aWR0aDtcblx0Y2FudmFzLmhlaWdodCA9IGNhbnZhcy5jYW52YXMuaGVpZ2h0ID0gb3B0aW9ucy53aWR0aDtcblxuXHRjYW52YXMuYnVmZmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG5cdGNhbnZhcy5idWZmZXIud2lkdGggPSBjYW52YXMud2lkdGg7XG5cdGNhbnZhcy5idWZmZXIuaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcblxuXHRjYW52YXMuYmN0eCA9IGNhbnZhcy5idWZmZXIuZ2V0Q29udGV4dCgnMmQnKTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBpbml0KTtcbiIsImNvbnN0IGNhbnZhcyA9IHtcblx0Y2FudmFzOiBudWxsLFxuXHRjdHg6IG51bGwsXG5cblx0YnVmZmVyOiBudWxsLFxuXHRiY3R4OiBudWxsLFxuXG5cdHdpZHRoOiAwLFxuXHRoZWlnaHQ6IDBcbn07XG5cbmNvbnN0IG9wdGlvbnM9ICB7XG5cdHdpZHRoOiA4MDAsXG5cdGhlaWdodDogNjAwLFxuXHRzY2FsZVg6IDEsXG5cdHNjYWxlWTogMVxufTtcblxuZXhwb3J0IHtjYW52YXMsIG9wdGlvbnN9O1xuIl19
