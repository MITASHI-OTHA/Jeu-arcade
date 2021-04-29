
import Phaser from 'phaser';

class PreloadScene extends Phaser.Scene {

  constructor() {
    super('PreloadScene');
  }

  preload() {
    this.load.audio('jump', 'assets/jump.m4a');
    this.load.audio('hit', 'assets/hit.m4a');
    this.load.audio('reach', 'assets/reach.m4a');

    this.load.image('ground', 'assets/Terrain/tuiles.png');

    this.load.image('cloud', 'assets/sky.png');

    this.load.image('dall', 'assets/Terrain/dall.png');

    this.load.atlas('smoke', 'assets/particles/flares.png', 'assets/particles/smoke.json');

    this.load.spritesheet('star', 'assets/stars.png', {
      frameWidth: 9, frameHeight: 9
    });

    this.load.spritesheet('frog', 'assets/Main_Characters/Ninja_Frog/Idle.png',
      {frameWidth: 32, frameHeight: 30}
    );

    this.load.spritesheet('doublejump', 'assets/Main_Characters/Ninja_Frog/DoubleJump.png',
      {frameWidth: 32, frameHeight: 30}
    );

    this.load.image('jump', 'assets/Main_Characters/Ninja_Frog/jump.png');

    this.load.spritesheet('frog-left', 'assets/Main_Characters/Ninja_Frog/Idle-left.png',
    {frameWidth: 32, frameHeight: 30}
  );

    this.load.spritesheet('run', 'assets/Main_Characters/Ninja_Frog/Run.png', 
      {frameWidth: 33, frameHeight: 30}
    );

    this.load.spritesheet('moon', 'assets/moon.png', {
      frameWidth: 20, frameHeight: 40
    });

    this.load.spritesheet('dino', 'assets/dino-run.png', {
      frameWidth: 88,
      frameHeight: 94
    })

    this.load.spritesheet('dino-down', 'assets/dino-down.png', {
      frameWidth: 118,
      frameHeight: 94
    })

    this.load.spritesheet('fox', 'assets/fox-sprite.png', {
      frameWidth: 114.7,
      frameHeight: 103,
      startFrame: 5
    })

    this.load.spritesheet('enemy-bird', 'assets/enemy-bird.png', {
      frameWidth: 92,
      frameHeight: 77
    })

    this.load.image('obsticle-1', 'assets/cactuses_small_1.png')
    this.load.image('obsticle-2', 'assets/cactuses_small_2.png')
    this.load.image('obsticle-3', 'assets/cactuses_small_3.png')
    this.load.image('obsticle-4', 'assets/cactuses_big_1.png')
    this.load.image('obsticle-5', 'assets/cactuses_big_2.png')
    this.load.image('obsticle-6', 'assets/cactuses_big_3.png')
  }

  create() {
    this.scene.start('PlayScene');
  }
}

export default PreloadScene;
