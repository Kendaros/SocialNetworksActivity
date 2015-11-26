import { Container } from 'pixi.js';

import Calendar from './calendar'

class Layout extends Container {
    constructor(scene, data) {

        super();

        this.scene = scene;
        this.data = data;

        this.x = window.innerWidth / 2;
        this.y = window.innerHeight / 2;

        console.log(this);

        this.calendar = new Calendar(this, this.data);

        this.addChild(this.calendar);

    }

    update() {
        this.calendar.move();
    }

}

export default Layout