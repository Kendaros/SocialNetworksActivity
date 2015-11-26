import { Container } from 'pixi.js';

import Calendar from './calendar'
import Chrono from './chrono'

class Layout extends Container {
    constructor(scene, data) {

        super();

        this.scene = scene;
        this.data = data;

        this.x = window.innerWidth / 2;
        this.y = window.innerHeight / 2;

        this.calendar = new Calendar(this.scene, this.data);

        this.addChild(this.calendar);



        //var path = [
        //    new PIXI.Point(0, 0),
        //    new PIXI.Point(1000, 0),
        //    new PIXI.Point(1000, 1000),
        //    new PIXI.Point(0, 1000)
        //];


        //var path = [
        //    new PIXI.Point(0, 0),
        //    new PIXI.Point(1000, 0),
        //    new PIXI.Point(0, 1000),
        //    new PIXI.Point(0, 0)
        //];

        //this.hitArea = new PIXI.Polygon(path);

        //this.drawAreas();

    }

    update() {
        this.calendar.move();
    }

    drawAreas() {

        for (var i = 0; i < 36; i++) {

            this.area = new PIXI.Graphics();


            this.nb = 36;
            this.radius = window.innerHeight/3.5;
            this.barHeight = 30;
            this.layer = 20;

            var path = [

                new PIXI.Point(Math.sin(-i * (Math.PI * 2) / this.nb + Math.PI) * (this.radius + this.barHeight + 140), Math.cos(-i * (Math.PI * 2) / this.nb + Math.PI) * (this.radius + this.barHeight - (4.5*this.layer))),
                new PIXI.Point(Math.sin(-i * (Math.PI * 2) / this.nb + Math.PI) * (this.radius + this.barHeight + 140), Math.cos(-i * (Math.PI * 2) / this.nb + Math.PI) * (this.radius + this.barHeight + 140)),
                new PIXI.Point(Math.sin(-(i+1) * (Math.PI * 2) / this.nb + Math.PI) * (this.radius + this.barHeight + 140), Math.cos(-(i+1) * (Math.PI * 2) / this.nb + Math.PI) * (this.radius + this.barHeight + 140)),
                new PIXI.Point(Math.sin(-(i+1) * (Math.PI * 2) / this.nb + Math.PI) * (this.radius + this.barHeight - (4.5*this.layer)),  Math.cos(-(i+1) * (Math.PI * 2) / this.nb + Math.PI) * (this.radius + this.barHeight - (4.5*this.layer)))
            ];

        //var i = 0;

            this.area.beginFill(0xFFFFFF);
            this.area.lineStyle(2, 0xFFFFFF);

            var x0 = Math.sin(-i * (Math.PI * 2) / this.nb + Math.PI) * (this.radius - this.barHeight);
            var y0 = Math.cos(-i * (Math.PI * 2) / this.nb + Math.PI) * (this.radius + this.barHeight - (4.5*this.layer));
            //var x0 = 0;
            //var y0 = 0;

            var x1 = Math.sin(-i * (Math.PI * 2) / this.nb + Math.PI) * (this.radius + this.barHeight + 140);
            var y1 = Math.cos(-i * (Math.PI * 2) / this.nb + Math.PI) * (this.radius + this.barHeight + 140);
            var x2 = Math.sin(-(i+1) * (Math.PI * 2) / this.nb + Math.PI) * (this.radius + this.barHeight + 140);
            var y2 = Math.cos(-(i+1) * (Math.PI * 2) / this.nb + Math.PI) * (this.radius + this.barHeight + 140);
            var x3 = Math.sin(-(i+1) * (Math.PI * 2) / this.nb + Math.PI) * (this.radius + this.barHeight - (4.5*this.layer));
            var y3 = Math.cos(-(i+1) * (Math.PI * 2) / this.nb + Math.PI) * (this.radius + this.barHeight - (4.5*this.layer));

            this.area.moveTo(x0, y0);
            this.area.lineTo(x1, y1);
            this.area.lineTo(x2, y2);
            this.area.lineTo(x3, y3);


            this.area.interactive = true;
            this.area.hitArea = new PIXI.Polygon(path);
            this.area.mouseover = function(mouseData){
                console.log("MOUSE CLICK ");
            };
            this.addChild(this.area);
        }

        }



}

export default Layout