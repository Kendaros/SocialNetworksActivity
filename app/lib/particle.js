import { Sprite, BLEND_MODES } from 'pixi.js';

class Particle extends Sprite {
    constructor(options){

        var texture = PIXI.Texture.fromImage("./assets/img/wparticle.png");

        super(texture);

        this.x = options.x;
        this.y = options.y;

        this.scale = {
            x: 1/8,
            y: 1/8
        };

        this.alpha = 0.6;

        this.anchor.x = 0.5;
        this.anchor.y = 0.5;

        this.tint = options.color; // 0x111111
        this.blendMode = BLEND_MODES.OVERLAY;

    }

    move(dt){
        this.x += Math.sin(this.angle * Math.PI/180) * this.vx;
        this.y += Math.cos(this.angle * Math.PI/180) * this.vy;
        if(this.life <= 100){
            this.alpha = (this.life/100);
        }
        this.life -= dt;


        if(this.life <= 0){
            this.isAlive = false;
        }
    }

    reset(options) {
        this.x = options.x;
        this.y = options.y;
        this.scale.factor = Math.random() * 1.2;
        this.scale.x = this.scale.factor;
        this.scale.y = this.scale.factor;
        this.life = Math.random()*2000 + 1000;
        this.alpha = 1;

        this.isAlive = true;
    }
}

export default Particle