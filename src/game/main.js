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
};

const StartGame = (parent, settings) => {
    let config = { ...gameConfig, parent };
    config.scale.parent = parent;

    console.log(config);
    let game = new Phaser.Game(config);

    game.scene.add("PlayGame", playGame, true, settings["PlayGame"]);
    return game;
};

export default StartGame;

