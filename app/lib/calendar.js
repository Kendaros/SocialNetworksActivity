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

        this.mouseout = function(mouseData){
            console.log("MOUSE CLICK ");
        };

        this.facebookArray = [];
        this.twitterArray = [];
        this.youtubeArray = [];
        this.vimeoArray = [];

        this.radius = window.innerHeight/5;


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

        this.nbMonths = 12*3;

        this.drawCandidates();
        this.drawChrono();

        this.getData();

        this.drawYoutube();
        this.drawVimeo();
        this.drawFacebook();
        this.drawTwitter();


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


    move() {
        this.rotation -= 0.0005;
    }

}

export default Calendar