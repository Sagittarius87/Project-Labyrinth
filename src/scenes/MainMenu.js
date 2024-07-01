import { Scene } from 'phaser';
import { ButtonExitGame, ButtonNewGame, ButtonSettingsGame, ContinueGame, MainMenuButtons } from './MainMenuButtons';

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

        const buttonNewGame = new ButtonNewGame(this, 512, 384);
        this.add.existing(buttonNewGame);
        const buttonExitGame = new ButtonExitGame(this, 512, 384 + 64);
        this.add.existing(buttonExitGame)

        console.log('MainMenu');
    }
}
