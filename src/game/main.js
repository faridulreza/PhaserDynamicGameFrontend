import Phaser from "phaser";
import playGame from "./game";

let gameConfig = {
    type: Phaser.AUTO,
    backgroundColor: 0x87ceeb,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: "thegame",
        width: 320,
        height: 480,
    },
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            gravity: {
                y: 0,
            },
        },
    },
    scene: [
        playGame
    ]
};

const StartGame = (parent) => {
    let config = { ...gameConfig, parent };
    config.scale.parent = parent;
    return new Phaser.Game(config);
};

export default StartGame;

