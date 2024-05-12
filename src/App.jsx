import { useRef, useState } from "react";

import Phaser from "phaser";
import { PhaserGame } from "./game/PhaserGame";
import { EventBus } from "./game/EventBus";
import ChangeHandler from "./ChangeHandler";

const init_resources = {
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
    const [resources, setResources] = useState(init_resources);

    // Event emitted from the PhaserGame component
    const currentScene = (scene) => {};

    return (
        <div id="app">
            <PhaserGame
                ref={phaserRef}
                currentActiveScene={currentScene}
                settings={resources}
            />

            <ChangeHandler setResources={setResources} pahser={phaserRef} />
        </div>
    );
}

export default App;

