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

    // VORTEX
    //moveToCenter() {
    //    const dx = 0 - this.x;
    //    const dy = 0 - this.y;
    //    this.angle = Math.atan2( dy, dx ) * ( 180 / Math.PI );
    //
    //    this.speed = 1;
    //
    //    this.x += Math.sin(this.angle * Math.PI / 180) * this.speed;
    //    this.y -= Math.cos(this.angle * Math.PI / 180) * this.speed;
    //}

    moveToCenter() {
        const dx = 0 - this.x;
        const dy = 0 - this.y;
        this.angle = Math.atan2( dy, dx ) * ( 180 / Math.PI );

        this.speed = 0.1;

        this.x += Math.sin(this.angle * Math.PI / 180) * this.speed;
        this.y += Math.cos(this.angle * Math.PI / 180) * this.speed;
    }
}

export default Particle