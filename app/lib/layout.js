import { Container } from 'pixi.js';

import Calendar from './calendar'

class Layout extends Container {
    constructor(scene) {

        super();

        this.scene = scene;

        this.calendar = new Calendar(this.scene);

        this.addChild(this.calendar);

    }

    move(dt, speed, scale) {
        for (let j = 0; j < this.stars.length; j++) {
            this.stars[j].move(dt, speed, scale);
        }
    }

}

export default Layout