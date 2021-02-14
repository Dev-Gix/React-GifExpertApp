import React from 'react'
import { GifGridItem } from '../components/GifGridItem.js'
import { useFetchGifs } from '../Hooks/useFetchGifs.js';


export const GifGrid = ({ category }) => {
   

    const {data:gif,loading} = useFetchGifs(category);
    
    
    return (
        <>
            <h1>{category}</h1>
            {loading && <p>Cargando...</p>}
           {  <div className="card-grid">

                {
                    gif.map(img => (
                        <GifGridItem
                            key={img.id}
                            gif={img}
                            {...img} />
                    ))
                }


            </div> }
        </>
    );
}
