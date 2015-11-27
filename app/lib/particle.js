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
}

export default Particle