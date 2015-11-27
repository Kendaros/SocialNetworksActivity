import { Container, Text } from 'pixi.js';

import Particle from './particle'
import Date from './date'
import Chrono from './chrono'

import Candidates from './candidates'
import Facebook from './facebook'
import Youtube from './youtube'
import Twitter from './twitter'
import Vimeo from './vimeo'

class Calendar extends Container {
    constructor(scene, data) {

        super();

        this.scene = scene;
        this.data = data;
        this.interactive = true;

        this.facebookArray = [];
        this.twitterArray = [];
        this.youtubeArray = [];
        this.vimeoArray = [];

        this.radius = window.innerHeight/5;

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

        this.nbMonths = 12*3;

        this.drawCandidates();
        this.drawChrono();


        this.getData();

        this.drawYoutube();
        this.drawVimeo();
        this.drawFacebook();
        this.drawTwitter();

        this.drawAreas();


    }

    drawChrono() {
        
        var options = {
            radius : this.radius,
            months : this.nbMonths
        };

        this.chrono = new Chrono(options);
        this.addChild(this.chrono);

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

        var options = {
            calendar: this,
            array: this.youtubeArray,
            months: this.nbMonths,
            radius: this.radius,
            layer: this.layer
        };

        this.youtube = new Youtube(options);
        this.addChild(this.youtube);

    }
    drawVimeo() {

        var options = {
            calendar: this,
            array: this.vimeoArray,
            months: this.nbMonths,
            radius: this.radius,
            layer: this.layer
        };

        this.vimeo = new Vimeo(options);
        this.addChild(this.vimeo);

    }
    drawFacebook() {

        var options = {
            calendar: this,
            array: this.facebookArray,
            months: this.nbMonths,
            radius: this.radius,
            layer: this.layer
        };

        this.facebook = new Facebook(options);
        this.addChild(this.facebook);

    }
    drawTwitter() {

        var options = {
            calendar: this,
            array: this.twitterArray,
            months: this.nbMonths,
            radius: this.radius,
            layer: this.layer
        };

        this.twitter = new Twitter(options);
        this.addChild(this.twitter);

    }
    drawCandidates() {

        var options = {
            radius: this.radius
        };

        this.candidates = new Candidates(options);
        this.addChild(this.candidates);

    }

    drawArea(index) {

        if(index <= 29) {
            var path = [
                new PIXI.Point(0,0),
                new PIXI.Point(Math.sin(-index * (Math.PI * 2) / this.nbMonths + Math.PI) * (this.radius + this.barHeight + 140), Math.cos(-index * (Math.PI * 2) / this.nbMonths + Math.PI) * (this.radius + this.barHeight + 140)),
                new PIXI.Point(Math.sin(-(index+1) * (Math.PI * 2) / this.nbMonths + Math.PI) * (this.radius + this.barHeight + 140), Math.cos(-(index+1) * (Math.PI * 2) / this.nbMonths + Math.PI) * (this.radius + this.barHeight + 140)),
                new PIXI.Point(0, 0)
            ];

            this.drawPolygon(path);

            //this.hitArea = new PIXI.Polygon(path);
            //this.interactive = true;
            //
            //this.touchmove = function(mouseData){
            //    console.log("MOUSE CLICK ");
            //}
        }


    }

    writeDate(options) {
        this.text = new Date(options);
        this.addChild(this.text);
    }


    drawAreas() {

        for (var i = 0; i < this.nbMonths - 6; i++) {

            this.area = new PIXI.Graphics();

            this.area.facebookArray = this.facebookArray;
            this.area.twitterArray = this.twitterArray;
            this.area.youtubeArray = this.youtubeArray;
            this.area.vimeoArray = this.vimeoArray;

            this.area.alpha = 0;

            this.radius = window.innerHeight/3.5 + 50;
            this.barHeight = 30;

            //var path = [
            //
            //    new PIXI.Point(Math.sin(-i * (Math.PI * 2) / this.nb + Math.PI) * (this.radius + this.barHeight + 140), Math.cos(-i * (Math.PI * 2) / this.nb + Math.PI) * (this.radius + this.barHeight - (4.5*this.layer))),
            //    new PIXI.Point(Math.sin(-i * (Math.PI * 2) / this.nb + Math.PI) * (this.radius + this.barHeight + 140), Math.cos(-i * (Math.PI * 2) / this.nb + Math.PI) * (this.radius + this.barHeight + 140)),
            //    new PIXI.Point(Math.sin(-(i+1) * (Math.PI * 2) / this.nb + Math.PI) * (this.radius + this.barHeight + 140), Math.cos(-(i+1) * (Math.PI * 2) / this.nb + Math.PI) * (this.radius + this.barHeight + 140)),
            //    new PIXI.Point(Math.sin(-(i+1) * (Math.PI * 2) / this.nb + Math.PI) * (this.radius + this.barHeight - (4.5*this.layer)),  Math.cos(-(i+1) * (Math.PI * 2) / this.nb + Math.PI) * (this.radius + this.barHeight - (4.5*this.layer)))
            //];

            this.area.beginFill(0xFFFFFF);
            this.area.lineStyle(1, 0xFFFFFF);

            //var x0 = Math.sin(-i * (Math.PI * 2) / this.nb + Math.PI) * (this.radius - this.barHeight);
            //var y0 = Math.cos(-i * (Math.PI * 2) / this.nb + Math.PI) * (this.radius + this.barHeight - (4.5*this.layer));
            var x0 = 0;
            var y0 = 0;

            var x1 = Math.sin(-i * (Math.PI * 2) / this.nbMonths + Math.PI) * (this.radius + this.barHeight);
            var y1 = Math.cos(-i * (Math.PI * 2) / this.nbMonths + Math.PI) * (this.radius + this.barHeight);
            var x2 = Math.sin(-(i+1) * (Math.PI * 2) / this.nbMonths + Math.PI) * (this.radius + this.barHeight);
            var y2 = Math.cos(-(i+1) * (Math.PI * 2) / this.nbMonths + Math.PI) * (this.radius + this.barHeight);
            var x3 = Math.sin(-(i+1) * (Math.PI * 2) / this.nbMonths + Math.PI) * (this.radius + this.barHeight - (4.5*this.layer));
            var y3 = Math.cos(-(i+1) * (Math.PI * 2) / this.nbMonths + Math.PI) * (this.radius + this.barHeight - (4.5*this.layer));

            this.area.moveTo(x0, y0);
            this.area.lineTo(x1, y1);
            this.area.lineTo(x2, y2);
            this.area.lineTo(x3, y3);

            var path = [
                new PIXI.Point(x0, y0),
                new PIXI.Point(x1, y1),
                new PIXI.Point(x2, y2),
                new PIXI.Point(x3, y3)
            ];


            this.area.interactive = true;
            this.area.hitArea = new PIXI.Polygon(path);
            this.area.mouseover = function(mouseData){
                this.alpha = 0.1;
                console.log(this.facebookArray[0]);
            };
            this.area.mouseout = function(mouseData){
                this.alpha = 0;
                console.log(this.facebookArray[0]);
            };
            this.addChild(this.area);
        }

    }

    move() {
        this.rotation -= 0.0005;
    }

}

export default Calendar