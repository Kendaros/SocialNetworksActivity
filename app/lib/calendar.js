import { Graphics } from 'pixi.js';

import Particle from './particle'

class Calendar extends Graphics {
    constructor(scene, data) {

        super();

        this.scene = scene;
        this.data = data;

        console.log(this.data);
        this.radius = window.innerHeight/3;
        //this.radius = 200;

        this.lineStyle(2, 0xFFFFFF);
        //this.drawCircle(0, 0, this.radius);
        //this.drawCircle(0, 0, this.radius - 20);
        //this.y = window.innerHeight + this.radius/2;
        this.y = window.innerHeight / 2;
        this.x = window.innerWidth / 2;

        this.nb = 12*3;

        for (var i = 0; i < this.nb; i++) {
            if(i == 0 || i == 12 || i == 24) {
                this.lineStyle(4, 0xFFFFFF);
                this.barHeight = 30;
            }
            else{
                this.lineStyle(2, 0xFFFFFF);
                this.barHeight = 10;
            }
            this.moveTo(Math.sin(-i * (Math.PI * 2)/this.nb + Math.PI) * (this.radius), Math.cos(-i * (Math.PI * 2)/this.nb + Math.PI) * (this.radius));
            this.lineTo(Math.sin(-i * (Math.PI * 2)/this.nb + Math.PI) * (this.radius + this.barHeight), Math.cos(-i * (Math.PI * 2)/this.nb + Math.PI) * (this.radius + this.barHeight));





            this.nbPoints = this.data.thirteen["january"].Facebook_fans / 1000;

            for (var j = 0; j < this.nbPoints; j++) {
                var options = {
                    x: Math.sin(-(j) *(Math.PI * 2) / ((this.nb*this.nbPoints))+ Math.PI - i*Math.PI/18) * (this.radius - Math.random()*20) + this.x,
                    y: Math.cos(-(j) *(Math.PI * 2) / ((this.nb*this.nbPoints))+ Math.PI - i*Math.PI/18) * (this.radius - Math.random()*20) + this.y,
                    color: 0x2a4291
                };

                var particle = new Particle(options);
                this.scene.addChild(particle);
            }

        }











    }

    move(dt, speed, scale) {
        for (let j = 0; j < this.stars.length; j++) {
            this.stars[j].move(dt, speed, scale);
        }
    }

}

export default Calendar