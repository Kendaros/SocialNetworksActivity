import { Container, Text } from 'pixi.js';

import $ from 'jquery'

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

        this.pause = false;

        this.facebookArray = [];
        this.twitterArray = [];
        this.youtubeArray = [];
        this.vimeoArray = [];

        this.radius = window.innerHeight/5;
        this.areaRadius = this.radius + 120;

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

    writeDate(options) {
        this.text = new Date(options);
        this.addChild(this.text);
    }

    drawAreas() {

        this.monthsForArea = [
            "january 2012",
            "february 2012",
            "march 2012",
            "april 2012",
            "may 2012",
            "june 2012",
            "july 2012",
            "august 2012",
            "september 2012",
            "october 2012",
            "november 2012",
            "december 2012",
            "january 2013",
            "february 2013",
            "march 2013",
            "april 2013",
            "may 2013",
            "june 2013",
            "july 2013",
            "august 2013",
            "september 2013",
            "october 2013",
            "november 2013",
            "december 2013",
            "january 2014",
            "february 2014",
            "march 2014",
            "april 2014",
            "may 2014",
            "june 2014",
            "july 2014",
            "august 2014",
            "september 2014",
            "october 2014",
            "november 2014",
            "december 2014"
        ];

        for (var i = 0; i < this.nbMonths - 6; i++) {

            this.area = new PIXI.Graphics();

            this.area.facebook = Math.floor(this.facebookArray[i] * 100);
            this.area.twitter = Math.floor(this.twitterArray[i] * 100);
            this.area.youtube = Math.floor(this.youtubeArray[i] * 1000);
            this.area.vimeo = Math.floor(this.vimeoArray[i] * 1000);

            if(i < 11) {
                this.area.candidates = 1181;
            }
            else if(i > 11 && i < 23) {
                this.area.candidates = 1289;
            }
            else if(i > 23) {
                this.area.candidates = 1464;
            }

            this.area.month = this.monthsForArea[i].toUpperCase();

            this.area.alpha = 0;

            this.barHeight = 30;

            //var path = [
            //
            //    new PIXI.Point(Math.sin(-i * (Math.PI * 2) / this.nb + Math.PI) * (this.areaRadius + this.barHeight + 140), Math.cos(-i * (Math.PI * 2) / this.nb + Math.PI) * (this.areaRadius + this.barHeight - (4.5*this.layer))),
            //    new PIXI.Point(Math.sin(-i * (Math.PI * 2) / this.nb + Math.PI) * (this.areaRadius + this.barHeight + 140), Math.cos(-i * (Math.PI * 2) / this.nb + Math.PI) * (this.areaRadius + this.barHeight + 140)),
            //    new PIXI.Point(Math.sin(-(i+1) * (Math.PI * 2) / this.nb + Math.PI) * (this.areaRadius + this.barHeight + 140), Math.cos(-(i+1) * (Math.PI * 2) / this.nb + Math.PI) * (this.areaRadius + this.barHeight + 140)),
            //    new PIXI.Point(Math.sin(-(i+1) * (Math.PI * 2) / this.nb + Math.PI) * (this.areaRadius + this.barHeight - (4.5*this.layer)),  Math.cos(-(i+1) * (Math.PI * 2) / this.nb + Math.PI) * (this.areaRadius + this.barHeight - (4.5*this.layer)))
            //];

            this.area.beginFill(0xFFFFFF);
            this.area.lineStyle(0.5, 0xFFFFFF);

            //var x0 = Math.sin(-i * (Math.PI * 2) / this.nb + Math.PI) * (this.areaRadius - this.barHeight);
            //var y0 = Math.cos(-i * (Math.PI * 2) / this.nb + Math.PI) * (this.areaRadius + this.barHeight - (4.5*this.layer));
            var x0 = 0;
            var y0 = 0;

            var x1 = Math.sin(-i * (Math.PI * 2) / this.nbMonths + Math.PI) * (this.areaRadius + this.barHeight);
            var y1 = Math.cos(-i * (Math.PI * 2) / this.nbMonths + Math.PI) * (this.areaRadius + this.barHeight);
            var x2 = Math.sin(-(i+1) * (Math.PI * 2) / this.nbMonths + Math.PI) * (this.areaRadius + this.barHeight);
            var y2 = Math.cos(-(i+1) * (Math.PI * 2) / this.nbMonths + Math.PI) * (this.areaRadius + this.barHeight);
            var x3 = Math.sin(-(i+1) * (Math.PI * 2) / this.nbMonths + Math.PI) * (this.areaRadius + this.barHeight - (4.5*this.layer));
            var y3 = Math.cos(-(i+1) * (Math.PI * 2) / this.nbMonths + Math.PI) * (this.areaRadius + this.barHeight - (4.5*this.layer));

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
                $('#candidates').html(this.candidates);
                $('#month').html(this.month);
                $('#youtube').html(this.youtube);
                $('#vimeo').html(this.vimeo);
                $('#facebook').html(this.facebook);
                $('#twitter').html(this.twitter);
            };

            this.area.mouseout = function(mouseData){
                this.alpha = 0;
            };
            this.area.click = function(mouseData) {
                if(!this.pause){
                    this.pause = true;
                }
                else {
                    this.pause = false;
                }
            }.bind(this);
            this.addChild(this.area);
        }

    }

    move() {
        if(!this.pause) {
            this.rotation -= 0.0005;
        }
    }

}

export default Calendar