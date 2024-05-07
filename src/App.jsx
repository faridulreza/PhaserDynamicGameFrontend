import { useRef, useState } from "react";

import Phaser from "phaser";
import { PhaserGame } from "./game/PhaserGame";
import { EventBus } from "./game/EventBus";

const init_settings = {
    PlayGame: {
        files: [
            {
                type: "image",
                key: "bg",
                url: "http://localhost:8080/assets/bg.png",
            },
            {
                type: "image",
                key: "bird",
                url: "http://localhost:8080/assets/bird.png",
            },
            {
                type: "image",
                key: "pipe",
                url: "http://localhost:8080/assets/pipe.png",
            },
        ],
    },
};

function App() {
    //  References to the PhaserGame component (game and scene are exposed)
    const phaserRef = useRef();
    const [settings, setSettings] = useState(init_settings);

    // Event emitted from the PhaserGame component
    const currentScene = (scene) => {};

    return (
        <div id="app">
            <PhaserGame
                ref={phaserRef}
                currentActiveScene={currentScene}
                settings={settings}
            />

            <button
                onClick={() => {
                    setSettings(p=>{
                        return{
                            ...p,
                            PlayGame: {
                                files: [
                                    {
                                        type: "image",
                                        key: "bg",
                                        url: "http://localhost:8080/assets/bg.png",
                                    },
                                    {
                                        type: "image",
                                        key: "bird",
                                        url: "http://localhost:8080/assets/star.png",
                                    },
                                    {
                                        type: "image",
                                        key: "pipe",
                                        url: "http://localhost:8080/assets/pipe.png",
                                    },
                                 
                                ],
                            },
                        }
                    })
                }}
            >
                change
            </button>
        </div>
    );
}

export default App;

