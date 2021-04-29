import Phaser, {Scene} from 'phaser';

class PlayScene extends Scene {

  constructor() {
    super('PlayScene');
  }

  create() {

    this.jump = 0

    this.gameOver = false
    
    const { height, width } =  this.game.config;

    var texture = this.textures.createCanvas('canvastexture', 800, 600);

    var cloud = this.textures.get('cloud').getSourceImage();

    texture.draw(0, 0, cloud);
    texture.draw(900, 0, cloud);
    texture.draw(0, 340, cloud);
    texture.draw(340, 0, cloud);

    this.platforms = this.physics.add.staticGroup();

    this.platforms2 = this.physics.add.staticGroup();
    //  Set the global composite op:
    texture.context.globalCompositeOperation = 'destination-out';

   // this.add.image(0, 0, 'canvastexture').updateDisplayOrigin()
  //  .setOrigin(0);

 //  this.ground = this.add.tileSprite(0, height, width, 15, 'ground').setOrigin(0, 1)

   this.ennemy = this.physics.add.group();

   for (var i = 0; i < 1000; i++)
    {
      this.platforms.create(47 * i, height, 'ground').setScale(2).refreshBody();
      this.platforms2.create(47 * i, 0, 'ground').setScale(2).refreshBody();
    }
   // this.run = this.physics.add.sprite(0, height, 'run')
   this.platforms.create(400, 300, 'dall').setScale(0.5).refreshBody();

   this.frog = this.physics.add.sprite(0, height, 'frog')
    .setGravityY(5000)
    .setOrigin(0, 15)
    .setBounce(0.2);

    this.createControll();
    this.gameSpeed = 10;
    this.initAnims(height);

    var particles = this.add.particles('smoke');

    var frog
  
  /*  this.emitters = particles.createEmitter({
        frame: 'red',
        speed: {
            onEmit:  function(particle, key, t, value)
            {
                return  frog.body.speed
            }
        },
        lifespan: {
            onEmit:  function(particle, key, t, value)
            {
                return Phaser.Math.Percent(frog.body.speed, 0, 300) * 2000;
            }
        },
        alpha: {
            onEmit:  function(particle, key, t, value)
            {
                return Phaser.Math.Percent(frog.body.speed, 0, 300) * 2000;
            }
        },
        scale: { start: 1.0, end: 0 },
        blendMode: 'ADD'
    });

    frog = this.frog

    frog.setMass(20)

    this.emitters.startFollow(frog); */


   /* this.tweens.add({
      targets: this.frog,
      duration: 8800,
      yoyo:true,
  }); */

    this.physics.add.collider(this.frog, this.platforms)
  }


  update() {
    if(this.gameOver) {
      return
    }
    if(this.frog.body.touching.down) {
      this.physics.add.collider(this.frog, this.platforms2)
    }
  //  this.ground.tilePositionX += this.gameSpeed;
  /*   if( this.cactus.body.x <= 0) {
      this.cactus.displayOriginX = -150
      this.cactus.setCollideWorldBounds(false)
    } */

 
   // this.cactus.displayOriginX += 10

   // this.bird.displayOriginX += 18

      if (this.frog.body.deltaAbsY() > 0) {
        //this.frog.anims.stop();
       // this.frog.setTexture('frog', 0);
      } else {
        //this.frog.play('frog-run', true);
      }
      if(this.frog.body.touching.down) {
        this.jump = 0
      }
  }

  createControll() {

    this.cursors = this.input.keyboard.createCursorKeys();

    /* this.input.keyboard.on('keydown-SPACE', () => {
      if (!this.frog.body.onFloor()) { return; }
        this.frog.setTexture('frog', 0);
        this.frog.setVelocityY(-1600);
    }) */

    this.input.keyboard.on('keydown-RIGHT', () => {
       this.frog.setVelocityX(160);
        this.frog.anims.play('right-walk', true);
    })

      this.input.keyboard.on('keydown-LEFT', () => {
      this.frog.setVelocityX(-160);
      this.frog.anims.play('left-walk', true);
      })
    // 
      this.input.keyboard.on('keyup', () => {
        this.frog.setVelocityX(0);
        this.frog.anims.play('turn')
    })

        this.input.keyboard.on('keydown-UP', () => {
          if(this.frog.body.touching.down) {
            this.jump ++
            this.frog.body.velocity.y = -900
          //  this.frog.setTexture('jump');
            console.log("====>", this.frog.body.y)
          } else if(!this.frog.body.touching.down && this.jump < 2) {
                this.frog.body.velocity.y = -1000
                this.frog.anims.play('jump')
                this.jump ++
          }
      })
  }

  initAnims(height) {
   
   // this.cactus = this.physics.add.sprite(900, height, 'obsticle-1').setOrigin(0, 1)
  
   this.anims.create({
      key: 'left-walk',
      frames: this.anims.generateFrameNumbers('frog-left', 
      {start: 11, end: 8}),
      frameRate: 10,
      repeat: -1
    })

    this.anims.create({
      key: 'turn',
      frames: this.anims.generateFrameNumbers('frog', { start: 4, end: 5 }),
      frameRate: 4,
      repeat: -1
  });

    this.anims.create({
      key: 'right-walk',
      frames: this.anims.generateFrameNumbers('run', { start: 0, end: 3 }),
      frameRate: 10,
      repeat: -1
      });

      this.anims.create({
        key: 'jump',
        frames: this.anims.generateFrameNumbers('doublejump', { start: 0, end: 5 }),
        frameRate: 15,
        repeat: -1
        });

   }

}

export default PlayScene;
