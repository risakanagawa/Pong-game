import { SVG_NS, KEYS } from '../settings';
import { Board } from './Board';
import { Paddle } from './Paddle';
import { Ball } from './Ball';
import { Score } from './Score';

export default class Game {

	constructor(element, width, height) {
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

		this.ballTriger = KEYS.ballTrigger;
		this.secondBall = false;

		this.gameElement = document.getElementById(this.element);

		this.ball = new Ball(this.ballRadius, this.width, this.height);
		this.board = new Board(this.width, this.height);
		this.score1 = new Score(this.width / 2 - 50, 30, this.scoreFontSize);
		this.score2 = new Score(this.width / 2 + 25, 30, this.scoreFontSize);

		this.winner1 = new Score(20, 30, this.scoreFontSize);
		this.winner2 = new Score(this.width / 2 + 110, 30, this.scoreFontSize);

		this.starMsg = new Score(this.width / 2 - 190, this.height / 2, this.scoreFontSize);

		this.player1 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			this.boardGap,
			((this.height - this.paddleHeight) / 2),
			KEYS.a,
			KEYS.z
		);

		this.player2 = new Paddle(
			this.height,
			this.paddleWidth,
			this.paddleHeight,
			this.width - this.paddleWidth - this.boardGap,
			((this.height - this.paddleHeight) / 2),
			KEYS.up,
			KEYS.down
		);

		document.addEventListener('keydown', event => {
			switch (event.key) {
				case KEYS.spaceBar:
					if (!this.gameStarted) {
						this.gameStarted = true;
					} else {
						this.pause = !this.pause;
					}
					break;
			}
		});

		this.ball2 = new Ball(this.ballRadius, this.width, this.height);
		document.addEventListener('keydown', (e) => {
			if (e.key === this.ballTriger) {
				this.secondBall = true;
			}
			if(this.pause) {
				this.secondBall = false;
			}
		});
	}



	render() {
		this.finalScore = document.querySelector('#finalScore').value;

		if (this.pause) {
			return;
		}

		this.gameElement.innerHTML = '';
		let svg = document.createElementNS(SVG_NS, 'svg');
		svg.setAttributeNS(null, 'width', this.width);
		svg.setAttributeNS(null, 'height', this.height);
		svg.setAttributeNS(null, 'viewBox', `0 0 ${this.width} ${this.height}`);
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

}