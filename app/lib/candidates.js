import { Graphics } from 'pixi.js';

import Date from './date'

class Candidates extends Graphics {
    constructor(options) {

        super();

        this.radius = options.radius;

        this.lineStyle(3, 0xFFFFFF);
        this.arc(0, 0, this.radius + 60, -Math.PI/2, Math.PI/6);

        this.lineStyle(3, 0xFFFFFF);
        this.arc(0, 0, this.radius + 60+108/8, Math.PI/6, Math.PI/2 + 2*Math.PI/6);

        this.lineStyle(3, 0xFFFFFF);
        this.arc(0, 0, this.radius + 60+283/8, Math.PI/2 + 2*Math.PI/6, -Math.PI + Math.PI/6);

    }
}

export default Candidates