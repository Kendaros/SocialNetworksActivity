import { Sprite } from 'pixi.js';

class Center extends Sprite {
    constructor(){

        var texture = PIXI.Texture.fromImage("./assets/img/particle.png");

        super(texture);

        this.x = 0;
        this.y = 0;

        this.alpha = 0;

        this.scale = {
            x: 1/3,
            y: 1/3
        };

        this.anchor.x = 0.5;
        this.anchor.y = 0.5;

        this.tint = 0xFFFFFF; // 0x111111

    }

    update() {
        if(this.alpha <= 1) {
            this.alpha += 0.005;
        }

    }
}

export default Center