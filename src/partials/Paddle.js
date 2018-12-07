import { SVG_NS } from '../settings';


export class Paddle {
    constructor(boardHeight, width, height, x, y, up, down) {
        this.boardHeight = boardHeight;
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.up = up;
        this.down = down;

        this.speed = 10;
        this.score = 0;

        document.addEventListener('keydown', event => {
            switch (event.key) {
                case this.up:
                    this.y = Math.max(0, this.y - this.speed);
                    break;
                case this.down:
                    this.y = Math.min(this.boardHeight - this.height, this.y + this.speed);
                    break;
            }
        });
    }

    coordinates() {
        const leftX = this.x;
        const rightX = this.x + this.width;
        const topY = this.y;
        const bottomY = this.y + this.height;
        return [leftX, rightX, topY, bottomY];

    }

    render(svg) {
        let player = document.createElementNS(SVG_NS, 'rect');
        player.setAttributeNS(null, 'width', this.width);
        player.setAttributeNS(null, 'height', this.height);
        player.setAttributeNS(null, 'x', this.x);
        player.setAttributeNS(null, 'y', this.y);
        player.setAttributeNS(null, 'fill', 'white');


        svg.appendChild(player);
    }
}