export const getGifs = async (category) => {
    const key = 'M1QnW4zL3c6meBWTx9h9DQQ85Ye4s7LH';

    const url = `https://api.giphy.com/v1/gifs/search?limit=${10}&api_key=${key}&q=${encodeURI(category)}`;

    const request = await fetch(url)
    const { data } = await request.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;

}