import { Graphics } from 'pixi.js';

import Particle from './particle'

class Facebook extends Graphics {
    constructor(options) {

        super();

        this.calendar = options.calendar;
        this.nbMonths = options.months;
        this.facebookArray = options.array;
        this.radius = options.radius;
        this.layer = options.layer;

        var step = 0;

        for (var k = 0; k < this.facebookArray.length; k++) {

            this.nbPoints = this.facebookArray[k];

            for (var j = 0; j < this.nbPoints; j++) {

                var options = {

                    x: Math.sin(-(j) *(Math.PI * 2) / ((this.nbMonths*this.nbPoints))+ Math.PI - step*Math.PI/18) * (this.radius - (3*this.layer) - Math.random()*20),
                    y: Math.cos(-(j) *(Math.PI * 2) / ((this.nbMonths*this.nbPoints))+ Math.PI - step*Math.PI/18) * (this.radius - (3*this.layer) - Math.random()*20),
                    color: 0xf800ff
                };

                var particle = new Particle(options);
                this.addChild(particle);

            }
            step += 1;
        }

    }
}

export default Facebook