import React, { useState } from 'react';
import './index.css';
import { AddCategory } from './components/AddCategory.js';
import { GifGrid } from './components/GifGrid.js';

export const GifExpertApp = () => {

    //const categories = ['One Punch','Samurai X','Dragon Ball'];
    const [categories, setCategory] = useState([]);

    /*  const handleadd =()=>{
         setCategory([...categories,"HunterXHunter"]);
     } */

    return (
        <>

            <h2 className="gifExpert-tittle">Gif<span>ExpertApp</span></h2>
            <AddCategory categories={categories} setCategory={setCategory} />

            <hr />
            <ol>

                {
                    categories.map(category => (

                        <GifGrid key={category} category={category} />

                    ))
                }

            </ol>
        </>

    );

};