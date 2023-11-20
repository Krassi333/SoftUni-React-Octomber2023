const baseURL = "http://localhost:3030/jsonstore";

export const create = async (gameData) => {
    const response = await fetch(`${baseURL}/games`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(gameData)
    });

    const result = await response.json();

    return result;
}

export const getAll = async () => {
    const responce = await fetch(`${baseURL}/games`, {
        method: 'GET'
    });

    const result = await responce.json();
    return Object.values(result);
}