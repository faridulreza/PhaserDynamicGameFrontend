export const getDescription = async (prompt) => {
    const resp = await fetch(
        import.meta.env.VITE_SERVER_URL + "/get_environment",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ description: prompt }),
        }
    );

    const data = await resp.json();
    return data;
};

export const getImageUrl = async (prompt, dimension, removeBg = false) => {
    const resp = await fetch(
        import.meta.env.VITE_SERVER_URL + "/get_image_url",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                description: prompt,
                dimension: dimension,
                removeBg,
            }),
        }
    );

    const data = await resp.json();
    return data;
};

