import Dat from 'dat-gui';
import Scene from './scene/scene';
import { Graphics } from 'pixi.js';
import NumberUtils from './utils/number-utils';
import EventEmitter from './lib/event-emitter'
import $ from 'jquery'

import Layout from './lib/layout'
import Particle from './lib/particle'

class App {

    constructor() {

        this.getJSON();

        EventEmitter.on('JSON_LOADED', this.onJsonLoaded.bind(this));

    }

    onJsonLoaded() {

        this.DELTA_TIME = 0;
        this.LAST_TIME = Date.now();

        this.scene = new Scene();

        let root = document.body.querySelector('.app');
        root.appendChild(this.scene.renderer.view);

        this.drawLayout();

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

        $("#button").on('click', function() {
            console.log("booh");
            $('#text').slideToggle(function(){
                //$(this).css({"top",20});
            });
        });

    }

    /**
     * update
     * - Triggered on every TweenMax tick
     */
    update() {

        this.DELTA_TIME = Date.now() - this.LAST_TIME;
        this.LAST_TIME = Date.now();

        this.layout.update();

        this.scene.render();

    }

    drawLayout() {
        this.layout = new Layout(this.scene, this.data);
        this.scene.addChild(this.layout);
    }

    getJSON() {

        var req = new XMLHttpRequest();
        req.open("GET", "assets/data.json", true);
        req.onreadystatechange = function() {
            if (req.readyState == 4) {
                this.data = JSON.parse(req.responseText);
                EventEmitter.emit("JSON_LOADED");
            }
        }.bind(this);
        req.send(null);
    }

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
