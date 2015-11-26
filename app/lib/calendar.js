import { Graphics, Text } from 'pixi.js';

import Particle from './particle'
import Date from './date'

class Calendar extends Graphics {
    constructor(scene, data) {

        super();

        this.scene = scene;
        this.data = data;

        this.facebookArray = [];
        this.twitterArray = [];
        this.youtubeArray = [];
        this.vimeoArray = [];

        this.radius = window.innerHeight/3.5;


        //this.drawCircle(0, 0, this.radius);
        //this.drawCircle(0, 0, this.radius - 20);
        //this.y = window.innerHeight + this.radius/2;

        //this.y = window.innerHeight / 2;
        //this.x = window.innerWidth / 2;

        this.layer = 20;

        this.months = [
            "january",
            "february",
            "march",
            "april",
            "may",
            "june",
            "july",
            "august",
            "september",
            "october",
            "november",
            "december"
        ];

        this.years = [
            "twelve",
            "thirteen",
            "fourteen"
        ];

        this.nb = 12*3;

        this.drawCandidates();
        this.drawChrono();

        this.getData();

        this.drawYoutube();
        this.drawVimeo();
        this.drawFacebook();
        this.drawTwitter();

    }

    drawChrono() {

        var outer = 140;

        for (var i = 0; i < this.nb - 5; i++) {
            if(i == 0 || i == 12 || i == 24) {
                this.lineStyle(2, 0xFFFFFF);
                this.barHeight = 30;
            }
            else{
                this.lineStyle(0.5, 0xFFFFFF);
                this.barHeight = 10;
            }

            this.moveTo(Math.sin(-i * (Math.PI * 2)/this.nb + Math.PI) * (this.radius + outer), Math.cos(-i * (Math.PI * 2)/this.nb + Math.PI) * (this.radius + outer));
            this.lineTo(Math.sin(-i * (Math.PI * 2)/this.nb + Math.PI) * (this.radius + this.barHeight + outer), Math.cos(-i * (Math.PI * 2)/this.nb + Math.PI) * (this.radius + this.barHeight + outer));

            if(i == 0) {
                var options = {
                    text: "2012",
                    x: Math.sin(-i * (Math.PI * 2) / this.nb + Math.PI) * (this.radius + this.barHeight + outer),
                    y: Math.cos(-i * (Math.PI * 2) / this.nb + Math.PI) * (this.radius + this.barHeight + outer),
                    rotation: 0
                };

                this.writeDate(options);
            }
            if(i == 12) {
                var options = {
                    text: "2013",
                    x: Math.sin(-i * (Math.PI * 2) / this.nb + Math.PI) * (this.radius + this.barHeight + outer),
                    y: Math.cos(-i * (Math.PI * 2) / this.nb + Math.PI) * (this.radius + this.barHeight + outer),
                    rotation: Math.PI * 2/3
                };

                this.writeDate(options);
            }
            if(i == 24) {
                var options = {
                    text: "2014",
                    x: Math.sin(-i * (Math.PI * 2) / this.nb + Math.PI) * (this.radius + this.barHeight + outer),
                    y: Math.cos(-i * (Math.PI * 2) / this.nb + Math.PI) * (this.radius + this.barHeight + outer),
                    rotation: Math.PI + Math.PI/3
                };

                this.writeDate(options);
            }

        }
    }

    getData() {
        for (var y = 0; y < this.years.length; y++) {
            for (var m = 0; m < this.months.length; m++) {
                this.nbPoints = this.data[this.years[y]][this.months[m]].Facebook_fans / 100;
                this.facebookArray.push(this.nbPoints);
                
                this.nbPoints = this.data[this.years[y]][this.months[m]].Twitter_followers / 100;
                this.twitterArray.push(this.nbPoints);
                
                this.nbPoints = this.data[this.years[y]][this.months[m]].Youtube_views / 1000;
                this.youtubeArray.push(this.nbPoints);
                
                this.nbPoints = this.data[this.years[y]][this.months[m]].Vimeo_views / 1000;
                this.vimeoArray.push(this.nbPoints);
            }
        }
    }

    drawYoutube() {

        var step = 0;

        for (var k = 0; k < this.youtubeArray.length; k++) {

            this.nbPoints = this.youtubeArray[k];

            for (var j = 0; j < this.nbPoints; j++) {

                var options = {

                    x: Math.sin(-(j) *(Math.PI * 2) / ((this.nb*this.nbPoints))+ Math.PI - step*Math.PI/18) * (this.radius - Math.random()*20) + this.x,
                    y: Math.cos(-(j) *(Math.PI * 2) / ((this.nb*this.nbPoints))+ Math.PI - step*Math.PI/18) * (this.radius - Math.random()*20) + this.y,
                    color: 0xee515d
                };

                var particle = new Particle(options);
                this.addChild(particle);

            }
            step += 1;
        }

    }
    drawVimeo() {

        var step = 0;

        for (var k = 0; k < this.vimeoArray.length; k++) {

            this.nbPoints = this.vimeoArray[k];

            for (var j = 0; j < this.nbPoints; j++) {

                var options = {

                    x: Math.sin(-(j) *(Math.PI * 2) / ((this.nb*this.nbPoints))+ Math.PI - step*Math.PI/18) * (this.radius - (1.5*this.layer) - Math.random()*20) + this.x,
                    y: Math.cos(-(j) *(Math.PI * 2) / ((this.nb*this.nbPoints))+ Math.PI - step*Math.PI/18) * (this.radius - (1.5*this.layer) - Math.random()*20) + this.y,
                    color: 0x00f3e8
                };

                var particle = new Particle(options);
                this.addChild(particle);

            }
            step += 1;
        }

    }
    drawFacebook() {
        var step = 0;

            for (var k = 0; k < this.facebookArray.length; k++) {

                this.nbPoints = this.facebookArray[k];

                for (var j = 0; j < this.nbPoints; j++) {

                    var options = {

                        x: Math.sin(-(j) *(Math.PI * 2) / ((this.nb*this.nbPoints))+ Math.PI - step*Math.PI/18) * (this.radius - (3*this.layer) - Math.random()*20) + this.x,
                        y: Math.cos(-(j) *(Math.PI * 2) / ((this.nb*this.nbPoints))+ Math.PI - step*Math.PI/18) * (this.radius - (3*this.layer) - Math.random()*20) + this.y,
                        color: 0xf800ff
                    };

                    var particle = new Particle(options);
                    this.addChild(particle);

                }
                step += 1;
            }
    }
    drawTwitter() {
        var step = 0;

            for (var k = 0; k < this.twitterArray.length; k++) {

                this.nbPoints = this.twitterArray[k];

                for (var j = 0; j < this.nbPoints; j++) {

                    var options = {

                        x: Math.sin(-(j) *(Math.PI * 2) / ((this.nb*this.nbPoints))+ Math.PI - step*Math.PI/18) * (this.radius - (4.5*this.layer) - Math.random()*20) + this.x,
                        y: Math.cos(-(j) *(Math.PI * 2) / ((this.nb*this.nbPoints))+ Math.PI - step*Math.PI/18) * (this.radius - (4.5*this.layer) - Math.random()*20) + this.y,
                        color: 0x6f00ff
                    };

                    var particle = new Particle(options);
                    this.addChild(particle);

                }
                step += 1;
            }
    }
    drawCandidates() {

        this.lineStyle(3, 0xFFFFFF);
        this.arc(0, 0, this.radius + 60, -Math.PI/2, Math.PI/6);

        this.lineStyle(3, 0xFFFFFF);
        this.arc(0, 0, this.radius + 60+108/8, Math.PI/6, Math.PI/2 + 2*Math.PI/6);

        this.lineStyle(3, 0xFFFFFF);
        this.arc(0, 0, this.radius + 60+283/8, Math.PI/2 + 2*Math.PI/6, -Math.PI + Math.PI/6);

    }

    writeDate(options) {
        this.text = new Date(options);
        this.addChild(this.text);
    }


    move() {
        this.rotation -= 0.0005;
    }

}

export default Calendar