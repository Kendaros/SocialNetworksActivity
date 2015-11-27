import { Container, Graphics } from 'pixi.js';

import Calendar from './calendar'
import Chrono from './chrono'
import Center from './center'

class Layout extends Container {
    constructor(scene, data) {

        super();

        this.scene = scene;
        this.data = data;

        this.x = window.innerWidth / 2;
        this.y = window.innerHeight / 2;

        this.calendar = new Calendar(this.scene, this.data);

        this.addChild(this.calendar);

        this.center = new Center();
        this.addChild(this.center);


    }

    update() {
        this.calendar.move();
        this.center.update();
    }



}

export default Layout