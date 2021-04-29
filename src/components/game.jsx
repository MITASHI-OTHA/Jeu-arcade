import Phaser from "phaser";
import React, { useEffect } from "react";
import PlayScene from './PlayScene';
import PreloadScene from './PreloadScene';

const Games = ()=> {
  useEffect(()=> {
    const config = {
      type: Phaser.WEBGL,
      width: 1000,
      height: 340,
      pixelArt: true,
      transparent: true,
      physics: {
      default: 'arcade',
      arcade: {
      debug: true
      }
      },
      scene: [PreloadScene, PlayScene]
    };

    new Phaser.Game(config);

  })
    return <>
        <p>ready</p>
    </>
}

export default Games