import {
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    TextField,
    Button,
    CircularProgress,
    Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
import { getDescription, getImageUrl } from "./api";
import { CheckBox } from "@mui/icons-material";

const ChangeResources = ({ prompt, setResources, setIsChanging }) => {
    const [resourceDescription, setResourceDescription] = useState(null);
    const [urls, setUrls] = useState({});

    useEffect(() => {
        getDescription(prompt)
            .then((data) => {
                setResourceDescription(data);
            })
            .catch((err) => {
                alert("Error getting description");
                console.error(err);
                setIsChanging(false);
            });
    }, [prompt]);

    useEffect(() => {
        if (!resourceDescription) return;

        const loadUrls = async () => {
            const urls = await Promise.all([
                getImageUrl(
                    resourceDescription.bird +
                        ". transparent Background. Focus the main subject",
                    [30, 30],
                    true
                ).then((data) => {
                    setUrls((p) => {
                        return { ...p, bird: data.image_url };
                    });

                    return data.image_url;
                }),
                getImageUrl(
                    resourceDescription.pipes + ". transparent Background",
                    [60, 480],
                    true
                ).then((data) => {
                    setUrls((p) => {
                        return { ...p, pipes: data.image_url };
                    });

                    return data.image_url;
                }),

                getImageUrl(resourceDescription.background, [320, 482]).then(
                    (data) => {
                        setUrls((p) => {
                            return { ...p, background: data.image_url };
                        });
                        return data.image_url;
                    }
                ),
            ]);

            setResources({
                PlayGame: {
                    files: [
                        {
                            type: "image",
                            key: "bg",
                            url: urls[2],
                        },
                        {
                            type: "image",
                            key: "bird",
                            url: urls[0],
                        },
                        {
                            type: "image",
                            key: "pipe",
                            url: urls[1],
                        },
                    ],
                },
            });
            setIsChanging(false);
        };

        loadUrls();
    }, [resourceDescription]);

    return (
        <Dialog open={true} onClose={() => setIsChanging(false)}>
            <DialogTitle>Changing Resources</DialogTitle>
            <DialogContent>
                <Stack
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    direction="row"
                    gap={1}
                >
                    <CircularProgress size="25px" />

                    {resourceDescription
                        ? "Generating resources"
                        : "Getting refined description"}
                </Stack>

                {urls.bird && (
                    <Stack
                        display="flex"
                        alignItems="center"
                        direction="row"
                        gap={1}
                        marginTop="10px"
                    >
                        <CheckBox /> Bird Image Generated
                    </Stack>
                )}

                {urls.pipes && (
                    <Stack
                        display="flex"
                        alignItems="center"
                        direction="row"
                        gap={1}
                        marginTop="10px"
                    >
                        <CheckBox /> Pipes Image Generated
                    </Stack>
                )}

                {urls.background && (
                    <Stack
                        display="flex"
                        alignItems="center"
                        direction="row"
                        marginTop="10px"
                        gap={1}
                    >
                        <CheckBox /> Background Image Generated
                    </Stack>
                )}
            </DialogContent>
        </Dialog>
    );
};

export default ChangeResources;

