import React, {useState, useEffect} from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {

    const [images, setImages] = useState([])

    useEffect(() => {
        getGifs();
    }, [])

    const getGifs = async() => {
        const url = 'https://api.giphy.com/v1/gifs/search?api_key=scG7dHaQjy1mgl955EWkoMZ0vRr9FHHz&q=dragon&limit=2';
        const resp = await fetch(url);
        const {data} = await resp.json();

        const gifs = data.map(img => {
            return {
                id: img.id,
                title: img.title,
                url: img.images?.downsized_medium.url
            }
        });

        console.log(gifs);
        setImages(gifs);

    }

    return (
        <>
            <h3>{category}</h3>
            <ol>
                {
                    images.map( img =>
                        <GifGridItem
                            key={img.id}
                            {...img}
                        />
                    )
                }
            </ol>
        </>
    )
}
