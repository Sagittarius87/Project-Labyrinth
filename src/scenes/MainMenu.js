import { Scene } from 'phaser';

export class MainMenu extends Scene
{
    constructor ()
    {
        super('MainMenu');
    }

    create ()
    {
        this.add.image(512, 384, 'background');

        //this.add.image(512, 300, 'logo');

        this.add.text(512, 200, 'Лабиринт', {
            fontFamily: 'Arial Black', fontSize: 68, color: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);

        console.log('MainMenu');
    }
}
