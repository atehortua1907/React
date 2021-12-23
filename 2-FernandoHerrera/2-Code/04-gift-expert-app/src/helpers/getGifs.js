export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=scG7dHaQjy1mgl955EWkoMZ0vRr9FHHz&q=${encodeURI(category)}&limit=20`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });

    return gifs;
}