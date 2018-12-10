/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var SVG_NS = exports.SVG_NS = 'http://www.w3.org/2000/svg';

var KEYS = exports.KEYS = {
    a: 'a',
    z: 'z',
    up: 'ArrowUp',
    down: 'ArrowDown',
    spaceBar: ' ',
    ballTrigger: 'Meta'
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.eot";

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(0);

var _Board = __webpack_require__(6);

var _Paddle = __webpack_require__(7);

var _Ball = __webpack_require__(5);

var _Score = __webpack_require__(8);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Game = function () {
	function Game(element, width, height) {
		var _this = this;

		_classCallCheck(this, Game);

		this.element = element;
		this.width = width;
		this.height = height;
		this.paddleWidth = 8;
		this.paddleHeight = 56;
		this.boardGap = 10;
		this.ballRadius = 8;
		this.scoreFontSize = 25;
		this.pause = false;
		this.gameStarted = false;

		this.player1Win = false;

		this.ballTriger = _settings.KEYS.ballTrigger;
		this.secondBall = false;

		this.gameElement = document.getElementById(this.element);

		this.ball = new _Ball.Ball(this.ballRadius, this.width, this.height);
		this.board = new _Board.Board(this.width, this.height);
		this.score1 = new _Score.Score(this.width / 2 - 50, 30, this.scoreFontSize);
		this.score2 = new _Score.Score(this.width / 2 + 25, 30, this.scoreFontSize);

		this.winner1 = new _Score.Score(20, 30, this.scoreFontSize);
		this.winner2 = new _Score.Score(this.width / 2 + 110, 30, this.scoreFontSize);

		this.starMsg = new _Score.Score(this.width / 2 - 190, this.height / 2, this.scoreFontSize);

		this.player1 = new _Paddle.Paddle(this.height, this.paddleWidth, this.paddleHeight, this.boardGap, (this.height - this.paddleHeight) / 2, _settings.KEYS.a, _settings.KEYS.z);

		this.player2 = new _Paddle.Paddle(this.height, this.paddleWidth, this.paddleHeight, this.width - this.paddleWidth - this.boardGap, (this.height - this.paddleHeight) / 2, _settings.KEYS.up, _settings.KEYS.down);

		document.addEventListener('keydown', function (event) {
			switch (event.key) {
				case _settings.KEYS.spaceBar:
					if (!_this.gameStarted) {
						_this.gameStarted = true;
					} else {
						_this.pause = !_this.pause;
					}
					break;
			}
		});

		this.ball2 = new _Ball.Ball(this.ballRadius, this.width, this.height);
		document.addEventListener('keydown', function (e) {
			if (e.key === _this.ballTriger) {
				_this.secondBall = true;
			}
			if (_this.pause) {
				_this.secondBall = false;
			}
		});
	}

	_createClass(Game, [{
		key: 'render',
		value: function render() {
			this.finalScore = document.querySelector('#finalScore').value;

			if (this.pause) {
				return;
			}

			this.gameElement.innerHTML = '';
			var svg = document.createElementNS(_settings.SVG_NS, 'svg');
			svg.setAttributeNS(null, 'width', this.width);
			svg.setAttributeNS(null, 'height', this.height);
			svg.setAttributeNS(null, 'viewBox', '0 0 ' + this.width + ' ' + this.height);
			this.gameElement.appendChild(svg);

			this.board.render(svg);

			if (!this.gameStarted) {
				this.starMsg.render(svg, 'PRESS SPACE   BAR TO PLAY');
			} else {
				this.player1.render(svg);
				this.player2.render(svg);

				this.ball.render(svg, this.player1, this.player2);

				if (this.player1.getScore() >= this.finalScore || this.player2.getScore() >= this.finalScore) {

					this.score1.render(svg, this.player1.getScore());
					this.score2.render(svg, this.player2.getScore());
					this.pause = !this.pause;
					this.player1.score = 0;
					this.player2.score = 0;

					if (this.player1.getScore() >= this.finalScore) {
						this.winner2.render(svg, 'WINNER!');
					} else {
						this.winner1.render(svg, 'WINNER!');
					}
				} else {
					this.score1.render(svg, this.player1.getScore());
					this.score2.render(svg, this.player2.getScore());
					this.winner1.render(svg, 'Player1');
					this.winner2.render(svg, 'Player2');
				}

				if (this.secondBall) {
					this.ball2.render(svg, this.player1, this.player2);
				}
			}
		}
	}]);

	return Game;
}();

exports.default = Game;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(9);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(14)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../node_modules/css-loader/index.js!./game.css", function() {
			var newContent = require("!!../../node_modules/css-loader/index.js!./game.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(3);

var _Game = __webpack_require__(2);

var _Game2 = _interopRequireDefault(_Game);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// create a game instance
var game = new _Game2.default('game', 512, 256);

(function gameLoop() {
    game.render();
    requestAnimationFrame(gameLoop);
})();

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Ball = undefined;

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Ball = exports.Ball = function () {
    function Ball(radius, width, height) {
        var _this = this;

        _classCallCheck(this, Ball);

        this.ping = new Audio('public/sounds/pong-01.wav');
        this.radius = radius;
        this.boardWidth = width;
        this.boardHeight = height;
        this.direction = 1;

        this.reset();
        document.addEventListener('keydown', function (event) {
            if (event.key === ' ') {
                _this.reset();
            }
        });
    }

    _createClass(Ball, [{
        key: 'reset',
        value: function reset() {
            this.x = this.boardWidth / 2;
            this.y = this.boardHeight / 2;
            this.vy = 0;
            while (this.vy === 0) {
                this.vy = Math.floor(Math.random() * 10 - 5);
            }
            this.vx = this.direction * (6 - Math.abs(this.vy));
        }
    }, {
        key: 'wallCollision',
        value: function wallCollision() {
            var hitTop = this.y - this.radius <= 0;
            var hitBottom = this.y + this.radius >= this.boardHeight;
            if (hitTop || hitBottom) {
                this.vy *= -1;
            }
        }
    }, {
        key: 'paddleCollision',
        value: function paddleCollision(player1, player2) {
            if (this.vx > 0) {
                var _player2$coordinates = player2.coordinates(),
                    _player2$coordinates2 = _slicedToArray(_player2$coordinates, 4),
                    left = _player2$coordinates2[0],
                    top = _player2$coordinates2[2],
                    bottom = _player2$coordinates2[3];

                var hit = this.x + this.radius >= left && this.y <= bottom && this.y >= top;
                if (hit) {
                    this.vx *= -1;
                    this.ping.play();
                }
            } else {
                var _player1$coordinates = player1.coordinates(),
                    _player1$coordinates2 = _slicedToArray(_player1$coordinates, 4),
                    right = _player1$coordinates2[1],
                    _top = _player1$coordinates2[2],
                    _bottom = _player1$coordinates2[3];

                var _hit = this.x - this.radius <= right && this.y <= _bottom && this.y >= _top;
                if (_hit) {
                    this.vx *= -1;
                    this.ping.play();
                }
            }
        }
    }, {
        key: 'checkScore',
        value: function checkScore(player1, player2) {
            var hitLeft = this.x - this.radius <= 0;
            var hitRight = this.x + this.radius >= this.boardWidth;
            if (hitLeft) {
                player2.increaceScore();
                this.reset();
                this.direction *= -1;
            } else if (hitRight) {
                player1.increaceScore();
                this.reset();
                this.direction *= -1;
            }
        }
    }, {
        key: 'render',
        value: function render(svg, player1, player2) {
            var circle = document.createElementNS(_settings.SVG_NS, 'circle');
            circle.setAttributeNS(null, 'r', this.radius);
            circle.setAttributeNS(null, 'cx', this.x);
            circle.setAttributeNS(null, 'cy', this.y);
            circle.setAttributeNS(null, 'fill', 'white');
            this.wallCollision();
            this.paddleCollision(player1, player2);
            this.checkScore(player1, player2);
            svg.appendChild(circle);
            this.x += this.vx;
            this.y += this.vy;
        }
    }]);

    return Ball;
}();

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
   value: true
});
exports.Board = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Board = exports.Board = function () {
   function Board(width, height) {
      _classCallCheck(this, Board);

      this.width = width;
      this.height = height;
   }

   _createClass(Board, [{
      key: 'render',
      value: function render(svg) {
         var rect = document.createElementNS(_settings.SVG_NS, 'rect');
         rect.setAttributeNS(null, 'width', this.width);
         rect.setAttributeNS(null, 'height', this.height);
         rect.setAttributeNS(null, 'fill', '#353535');

         var line = document.createElementNS(_settings.SVG_NS, 'line');
         line.setAttributeNS(null, 'x1', this.width / 2);
         line.setAttributeNS(null, 'x2', this.width / 2);
         line.setAttributeNS(null, 'y1', 0);
         line.setAttributeNS(null, 'y2', this.height);
         line.setAttributeNS(null, 'stroke', 'white');
         line.setAttributeNS(null, 'stroke-dasharray', '20, 15');
         line.setAttributeNS(null, 'stroke-width', '4');

         svg.appendChild(rect);
         svg.appendChild(line);
      }
   }]);

   return Board;
}();

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Paddle = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Paddle = exports.Paddle = function () {
    function Paddle(boardHeight, width, height, x, y, up, down) {
        _classCallCheck(this, Paddle);

        this.boardHeight = boardHeight;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.up = up;
        this.down = down;

        this.speed = 10;
        this.score = 0;
        this.setEvents();
    }

    _createClass(Paddle, [{
        key: 'setEvents',
        value: function setEvents() {
            var keysDown = {};
            var that = this;

            document.addEventListener('keydown', function (event) {
                keysDown[event.key] = true;
            });

            document.addEventListener('keyup', function (event) {
                keysDown[event.key] = false;
            });

            function updatePlayerPosition() {
                if (keysDown[that.up]) {
                    that.y = Math.max(0, that.y - that.speed);
                }
                if (keysDown[that.down]) {
                    that.y = Math.min(that.boardHeight - that.height, that.y + that.speed);
                }
            }
            setInterval(updatePlayerPosition, 50);
        }
    }, {
        key: 'increaceScore',
        value: function increaceScore() {
            this.score += 1;
        }
    }, {
        key: 'getScore',
        value: function getScore() {
            return this.score;
        }
    }, {
        key: 'coordinates',
        value: function coordinates() {
            var leftX = this.x;
            var rightX = this.x + this.width;
            var topY = this.y;
            var bottomY = this.y + this.height;
            return [leftX, rightX, topY, bottomY];
        }
    }, {
        key: 'render',
        value: function render(svg) {
            var player = document.createElementNS(_settings.SVG_NS, 'rect');
            player.setAttributeNS(null, 'width', this.width);
            player.setAttributeNS(null, 'height', this.height);
            player.setAttributeNS(null, 'x', this.x);
            player.setAttributeNS(null, 'y', this.y);
            player.setAttributeNS(null, 'fill', 'white');

            svg.appendChild(player);
        }
    }]);

    return Paddle;
}();

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.Score = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _settings = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Score = exports.Score = function () {
    function Score(x, y, size) {
        _classCallCheck(this, Score);

        this.x = x;
        this.y = y;
        this.size = size;
    }

    _createClass(Score, [{
        key: 'render',
        value: function render(svg, score) {
            var text = document.createElementNS(_settings.SVG_NS, 'text');
            text.setAttributeNS(null, 'x', this.x);
            text.setAttributeNS(null, 'y', this.y);
            text.setAttributeNS(null, 'font-size', this.size);
            text.setAttributeNS(null, 'fill', 'white');
            text.setAttributeNS(null, 'font-family', '"Silkscreen Web", monotype');
            text.textContent = score;

            svg.appendChild(text);
        }
    }]);

    return Score;
}();

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(10)();
// imports


// module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n\n/* HTML5 display-role reset for older browsers */\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\n\nbody {\n    line-height: 1;\n}\n\nol,\nul {\n    list-style: none;\n}\n\nblockquote,\nq {\n    quotes: none;\n}\n\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\n/**\n * FONTS\n */\n\n@font-face {\n    font-family: 'Silkscreen Web';\n    src: url(" + __webpack_require__(1) + ");\n    src: url(" + __webpack_require__(1) + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__(13) + ") format('woff'), url(" + __webpack_require__(12) + ") format('truetype'), url(" + __webpack_require__(11) + "#silkscreennormal) format('svg');\n    font-weight: normal;\n    font-style: normal;\n}\n\n/**\n * GAME\n */\n\nhtml {\n    font-size: 16px;\n}\n\nbody {\n    align-items: center;\n    display: flex;\n    font-family: 'Silkscreen Web', monotype;\n    height: 100vh;\n    justify-content: center;\n    width: 100%;\n}\n\nh1 {\n    font-size: 2.5rem;\n    margin-bottom: 1rem;\n    text-align: center;\n}\n\n.settingBox {\n    font-size: 1.2rem;\n    font-family: 'Silkscreen Web', monotype;\n}\n\n.settingBox input {\n    font-family: 'Silkscreen Web', monotype;\n    font-size: 1.2rem;\n    width: 70px;\n    height: 1.7rem;\n    background-color: white;\n    border: 2px solid black;\n    color: black;\n    text-align: right;\n}\n\n", ""]);

// exports


/***/ }),
/* 10 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.svg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.ttf";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "public/fonts/slkscr-webfont.woff";

/***/ }),
/* 14 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ })
/******/ ]);