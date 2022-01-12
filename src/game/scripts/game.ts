import 'phaser';
import HelloWorldScene from './scenes/HelloWorldScene';

const config = {
    type: Phaser.AUTO,
    parent: 'game',
    backgroundColor: '#125555',
    width: 800,
    height: 600,
    scene: HelloWorldScene
};

const game = new Phaser.Game(config);