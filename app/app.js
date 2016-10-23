import Scene from './scene/scene';
import { Graphics } from 'pixi.js';
import EventEmitter from './lib/event-emitter'
import $ from 'jquery'

import Layout from './lib/layout'

var beginPristine = true;

class App {

    constructor() {

        this.getJSON();

        this.isReady = false;
        this.beginPristine = true;


        $('#begin').on('click', function () {

            if(beginPristine) {
                $('#intro').fadeOut(2000);
                EventEmitter.emit('BEGIN');

                beginPristine = false;
            }
        });

        EventEmitter.on('JSON_LOADED', this.onJsonLoaded.bind(this));
        EventEmitter.on('BEGIN', this.onBegin.bind(this));

    }

    onBegin() {

        if (this.isReady) {
            this.DELTA_TIME = 0;
            this.LAST_TIME = Date.now();

            this.scene = new Scene();

            let root = document.body.querySelector('.app');
            root.appendChild(this.scene.renderer.view);

            this.drawLayout();

            this.addListeners();

            this.options = {
                x: window.innerWidth / 2,
                y: window.innerHeight / 2
            };

            var tl = new TimelineMax();
            tl.fromTo(this.layout.calendar.chrono, 1, {y: -1000}, {y: 0, ease: Power4.easeOut}, "john")
                .fromTo(this.layout.calendar.candidates, 1, {y: -1000}, {y: 0, ease: Power4.easeOut}, "john+=0.5")
                .fromTo($('#legend'), 2, {y: -160}, {y: 0, ease: Power4.easeOut}, "john+=4");

            this.layout.calendar.youtube.moveFromAbove();
            this.layout.calendar.vimeo.moveFromAbove();
            this.layout.calendar.twitter.moveFromAbove();
            this.layout.calendar.facebook.moveFromAbove();
        }
        else {
            window.setTimeout(this.onBegin.bind(this), 400);
        }

    }

    onJsonLoaded() {
        this.isReady = true;
        // $('#intro').fadeOut(2000);
        // EventEmitter.emit('BEGIN');
    }

    /**
     * addListeners
     */
    addListeners() {

        window.addEventListener('resize', this.onResize.bind(this));
        TweenMax.ticker.addEventListener('tick', this.update.bind(this))

        $("#button").on('click', function () {
            $('#text').slideToggle();
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
        req.onreadystatechange = function () {
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

        this.layout.resize();

    }


}

export default App;
