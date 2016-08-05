(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImNvbnN0IHN0YXRlID0ge1xuXHRjYW52YXM6IG51bGwsXG5cdGNvbnRleHQ6IG51bGwsXG5cdHdpZHRoOiAwLFxuXHRoZWlnaHQ6IDBcbn07XG5cbmZ1bmN0aW9uIGluaXQoKXtcblx0c3RhdGUuY2FudmFzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbnZhcycpO1xuXHRzdGF0ZS5jb250ZXh0ID0gc3RhdGUuY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcblxuXHRzdGF0ZS53aWR0aCA9IHN0YXRlLmNhbnZhcy53aWR0aDtcblx0c3RhdGUuaGVpZ2h0ID0gc3RhdGUuY2FudmFzLmhlaWdodDtcblxuXHRzdGF0ZS5jb250ZXh0LmZpbGxTdHlsZSA9IFwid2hpdGVcIjtcblx0c3RhdGUuY29udGV4dC5maWxsUmVjdCgwLCAwLCBzdGF0ZS53aWR0aCwgc3RhdGUuaGVpZ2h0KTtcblxuXHRzdGF0ZS5jb250ZXh0LmZpbGxTdHlsZSA9IFwiZ3JlZW5cIjtcblx0c3RhdGUuY29udGV4dC5maWxsUmVjdCgxMCwgMTAsIDEwMCwgMTAwKTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBpbml0KTtcbiJdfQ==
