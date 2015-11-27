import { Graphics } from 'pixi.js';

import Date from './date'

class Chrono extends Graphics {
    constructor(options) {

        super();
        
        this.radius = options.radius;
        this.nbMonths = options.months;
        
        var outer = 140;

        for (var i = 0; i < this.nbMonths - 5; i++) {
            if(i == 0 || i == 12 || i == 24) {
                this.lineStyle(2, 0xFFFFFF);
                this.barHeight = 30;
            }
            else{
                this.lineStyle(1, 0xFFFFFF);
                this.barHeight = 10;
            }

            this.moveTo(Math.sin(-i * (Math.PI * 2)/this.nbMonths + Math.PI) * (this.radius + outer), Math.cos(-i * (Math.PI * 2)/this.nbMonths + Math.PI) * (this.radius + outer));
            this.lineTo(Math.sin(-i * (Math.PI * 2)/this.nbMonths + Math.PI) * (this.radius + this.barHeight + outer), Math.cos(-i * (Math.PI * 2)/this.nbMonths + Math.PI) * (this.radius + this.barHeight + outer));

            if(i == 0) {
                var options = {
                    text: "2012",
                    x: Math.sin(-i * (Math.PI * 2) / this.nbMonths + Math.PI) * (this.radius + this.barHeight + outer),
                    y: Math.cos(-i * (Math.PI * 2) / this.nbMonths + Math.PI) * (this.radius + this.barHeight + outer),
                    rotation: 0
                };

                this.writeDate(options);
            }
            if(i == 12) {
                var options = {
                    text: "2013",
                    x: Math.sin(-i * (Math.PI * 2) / this.nbMonths + Math.PI) * (this.radius + this.barHeight + outer),
                    y: Math.cos(-i * (Math.PI * 2) / this.nbMonths + Math.PI) * (this.radius + this.barHeight + outer),
                    rotation: Math.PI * 2/3
                };

                this.writeDate(options);
            }
            if(i == 24) {
                var options = {
                    text: "2014",
                    x: Math.sin(-i * (Math.PI * 2) / this.nbMonths + Math.PI) * (this.radius + this.barHeight + outer),
                    y: Math.cos(-i * (Math.PI * 2) / this.nbMonths + Math.PI) * (this.radius + this.barHeight + outer),
                    rotation: Math.PI + Math.PI/3
                };

                this.writeDate(options);
            }

        }

    }

    writeDate(options) {
        this.text = new Date(options);
        this.addChild(this.text);
    }
}

export default Chrono