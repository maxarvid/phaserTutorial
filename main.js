var config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 },
        debug: false
      }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};

var game = new Phaser.Game(config);


// for assets needed for the game
function preload ()
{
  this.load.image('sky', 'assets/sky.png');
  this.load.image('ground', 'assets/ground.png');
  this.load.image('star', 'assets/star.png');
  this.load.image('bomb', 'assets/bomb.png');
  this.load.image('dude', 'assets/dude.png', { frameWidth: 32, frameHeight: 48 
    });
}

// display assets
function create ()
{
  this.add.image(400, 300, 'sky');
  // this.add.image(400, 300, 'star');

  platforms = this.physics.add.staticGroup();

  platforms.create(400, 548, 'ground').setScale(2).refreshBody();

  platforms.create(600, 400, 'ground');
  platforms.create(50, 250, 'ground');
  platforms.create(750, 220, 'ground')


}

function update ()
{
}