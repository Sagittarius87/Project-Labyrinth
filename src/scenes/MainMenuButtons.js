import Phaser from "phaser";

export class MainMenuButtons extends Phaser.GameObjects.Container
{
    buttonTexture = 'button';
    buttonMoveTexture = 'buttonMove';
    buttonClickTexture = 'buttonClick';

    constructor(scene, x, y)
    {
        super(scene, x, y);

        this.scene = scene;
        this.x = x;
        this.y = y;

        this.buttonImage = scene.add.image(0, 0, this.buttonTexture);
        this.buttonMoveImage = scene.add.image(0, 0, this.buttonMoveTexture);
        this.buttonClickImage = scene.add.image(0, 0, this.buttonClickTexture);

        this.add(this.buttonImage);
        this.add(this.buttonMoveImage);
        this.add(this.buttonClickImage);

        this.buttonMoveImage.setVisible(false);
        this.buttonClickImage.setVisible(false);

        this.setSize(this.buttonImage.width, this.buttonImage.height);

        this.setInteractive()
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_MOVE, () => {
                this.buttonImage.setVisible(false);
                this.buttonMoveImage.setVisible(true);
                console.log('Phaser.Input.Events.GAMEOBJECT_POINTER_MOVE');
            })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN, () => {
                this.buttonMoveImage.setVisible(false);
                this.buttonClickImage.setVisible(true);
                console.log('Phaser.Input.Events.GAMEOBJECT_POINTER_DOWN');
            })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
                this.buttonMoveImage.setVisible(true);
                this.buttonClickImage.setVisible(false);
                console.log('Phaser.Input.Events.GAMEOBJECT_POINTER_UP');
            })
            .on(Phaser.Input.Events.GAMEOBJECT_POINTER_OUT, () => {
                this.buttonImage.setVisible(true);
                this.buttonMoveImage.setVisible(false);
                console.log('Phaser.Input.Events.GAMEOBJECT_POINTER_OUT');
            });
    }
}

export class ButtonNewGame extends MainMenuButtons
{
    buttonName = 'Новая игра';
    fontSettings = { fontFamily: 'Arial Black', fontSize: 26, color: '#ffffff', align: 'center' };

    constructor(scene, x, y)
    {
        super(scene, x, y);

        this.textOnButton = scene.add.text(0, 0, this.buttonName, this.fontSettings).setOrigin(0.5);

        this.add(this.textOnButton);

        this.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
            console.log('ButtonNewGame');
        });
    }
}

export class ButtonContinueGame extends MainMenuButtons
{
    buttonName = 'Продолжить игру';
    fontSettings = { fontFamily: 'Arial Black', fontSize: 26, color: '#ffffff', align: 'center' };

    constructor(scene, x, y)
    {
        super(scene, x, y);

        this.textOnButton = scene.add.text(0, 0, this.buttonName, this.fontSettings).setOrigin(0.5);

        this.add(this.textOnButton);

        this.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
            console.log('ButtonContinueGame');
        });
    }
}

export class ButtonSettingsGame extends MainMenuButtons
{
    buttonName = 'Настройки игры';
    fontSettings = { fontFamily: 'Arial Black', fontSize: 26, color: '#ffffff', align: 'center' };

    constructor(scene, x, y)
    {
        super(scene, x, y);

        this.textOnButton = scene.add.text(0, 0, this.buttonName, this.fontSettings).setOrigin(0.5);

        this.add(this.textOnButton);

        this.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
            console.log('ButtonSettingsGame');
        });
    }
}

export class ButtonExitGame extends MainMenuButtons
{
    buttonName = 'Выход';
    fontSettings = { fontFamily: 'Arial Black', fontSize: 26, color: '#ffffff', align: 'center' };

    constructor(scene, x, y)
    {
        super(scene, x, y);

        this.textOnButton = scene.add.text(0, 0, this.buttonName, this.fontSettings).setOrigin(0.5);

        this.add(this.textOnButton);

        this.setInteractive().on(Phaser.Input.Events.GAMEOBJECT_POINTER_UP, () => {
            console.log('ButtonExitGame');
        });
    }
}

