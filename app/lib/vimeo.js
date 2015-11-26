import { Graphics } from 'pixi.js';

import Particle from './particle'

class Vimeo extends Graphics {
    constructor(options) {

        super();

        this.calendar = options.calendar;
        this.nbMonths = options.months;
        this.vimeoArray = options.array;
        this.radius = options.radius;
        this.layer = options.layer;

        var step = 0;

        for (var k = 0; k < this.vimeoArray.length; k++) {

            this.nbPoints = this.vimeoArray[k];

            for (var j = 0; j < this.nbPoints; j++) {

                var options = {

                    x: Math.sin(-(j) *(Math.PI * 2) / ((this.nbMonths*this.nbPoints))+ Math.PI - step*Math.PI/18) * (this.radius - (1.5*this.layer) - Math.random()*20) + this.x,
                    y: Math.cos(-(j) *(Math.PI * 2) / ((this.nbMonths*this.nbPoints))+ Math.PI - step*Math.PI/18) * (this.radius - (1.5*this.layer) - Math.random()*20) + this.y,
                    color: 0x00f3e8
                };

                var particle = new Particle(options);
                this.calendar.addChild(particle);

            }
            step += 1;
        }

    }
}

export default Vimeo