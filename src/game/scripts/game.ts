import 'phaser';

// Other
import DataBase from './utils/data-base';
import ProjectColor from './const/project-color';

// Scenes
import PreloadScene from './scenes/preload-scene';
import ExampleScene from './scenes/example-scene';

const initGame = (gameWidth, gameHeight, gameContainer) => {
  const mainGameConfig = {
    type: Phaser.AUTO,
    width: gameWidth,
    height: gameHeight,
    backgroundColor: ProjectColor.ExampleColor,
    parent: gameContainer,
    scale: {
      mode: Phaser.Scale.FIT,
      autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    physics: {
      default: 'arcade',
      arcade: {
        debug: true,
        gravity: { y: DataBase.BasicGravityForce },
      },
    },
    scene: [
      PreloadScene,
      ExampleScene,
    ],
  };

  return new Phaser.Game(mainGameConfig);
};

window.addEventListener('load', () => {
  initGame(DataBase.GameScreenWidth, DataBase.GameScreenHeight, 'phaser-game');
});
