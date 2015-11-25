import Dat from 'dat-gui';
import Scene from './scene/scene';
import { Graphics } from 'pixi.js';
import NumberUtils from './utils/number-utils';

import Layout from './lib/layout'
import Particle from './lib/particle'

class App {

    constructor() {

        this.DELTA_TIME = 0;
        this.LAST_TIME = Date.now();

        this.scene = new Scene();

        let root = document.body.querySelector('.app');
        root.appendChild(this.scene.renderer.view);

        this.drawLayout();
        //this.drawParticles();

        this.addListeners();

        this.options = {
            x: window.innerWidth/2,
            y: window.innerHeight/2
        };

        this.particle = new Particle(this.options);
        this.scene.addChild(this.particle);

    }

    /**
     * addListeners
     */
    addListeners() {

        window.addEventListener('resize', this.onResize.bind(this));
        TweenMax.ticker.addEventListener('tick', this.update.bind(this))

    }

    /**
     * update
     * - Triggered on every TweenMax tick
     */
    update() {

        this.DELTA_TIME = Date.now() - this.LAST_TIME;
        this.LAST_TIME = Date.now();

        this.scene.render();


    }

    drawLayout() {
        this.layout = new Layout(this.scene);
        this.scene.addChild(this.layout);
    }

    //drawParticles() {
    //    this.particle = new Particle({50, 50});
    //    this.scene.addChild(this.particle);
    //
    //}


    /**
     * onResize
     * - Triggered when window is resized
     * @param  {obj} evt
     */
    onResize(evt) {

        this.width = window.innerWidth;
        this.height = window.innerHeight;

        this.scene.resize(this.width, this.height);


    }


}

export default App;
