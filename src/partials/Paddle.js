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
        this.setEvents();
    }
    
    setEvents() {
        let keysDown = {};
        const that = this;

        document.addEventListener('keydown', event => {           
            keysDown[event.key] = true;
        });

        document.addEventListener('keyup', event => {
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

    increaceScore() {
        this.score += 1;
    }

    getScore() {
        return this.score;
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