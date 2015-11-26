import { Text } from 'pixi.js';

class Date extends Text {

    constructor(options) {

        super(Text);

        this.text = options.text;
        this.x = 0;
        this.y = 0;

        console.log(this.x);

        this.anchor.x = 0.5;
        this.anchor.y = 0.5;

        this.style.font = '20px Helvetica';
        this.style.fill = "white";

        this.x += options.x + Math.sin(options.rotation) * 30;
        this.y += options.y - Math.cos(options.rotation) * 30;

        this.rotation = options.rotation;
    }

}

export default Date