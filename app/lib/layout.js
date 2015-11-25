import { Container } from 'pixi.js';

import Calendar from './calendar'

class Layout extends Container {
    constructor(scene, data) {

        super();

        this.scene = scene;
        this.data = data;

        this.calendar = new Calendar(this.scene, this.data);

        this.addChild(this.calendar);

    }

    move(dt, speed, scale) {
        for (let j = 0; j < this.stars.length; j++) {
            this.stars[j].move(dt, speed, scale);
        }
    }

}

export default Layout