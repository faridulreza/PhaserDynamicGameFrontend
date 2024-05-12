import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
} from "@mui/material";
import { useState } from "react";
import ChangeResources from "./ChangeResources";

const ChangeHandler = ({ setResources }) => {
    const [prompt, setPrompt] = useState("");
    const [open, setOpen] = useState(false);
    const [isChanging, setIsChanging] = useState(false);

    return (
        <div>
            <Button variant="outlined" onClick={() => setOpen(true)}>
                Change Environment
            </Button>

            <Dialog
                open={open}
                onClose={() => setOpen(false)}
                maxWidth="md"
                fullWidth
            >
                <DialogTitle> Change Environment</DialogTitle>
                <DialogContent>
                    <br></br>
                    <TextField
                        label="Prompt"
                        placeholder="Describe the environment ..."
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        fullWidth
                        multiline
                        rows={8}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => setOpen(false)}>Cancel</Button>
                    <Button
                        onClick={() => {
                            setOpen(false);
                            setIsChanging(true);
                        }}
                    >
                        Change
                    </Button>
                </DialogActions>
            </Dialog>

            {isChanging && (
                <ChangeResources
                    prompt={prompt}
                    setResources={setResources}
                    isChanging={isChanging}
                    setIsChanging={setIsChanging}
                />
            )}
        </div>
    );
};

export default ChangeHandler;

