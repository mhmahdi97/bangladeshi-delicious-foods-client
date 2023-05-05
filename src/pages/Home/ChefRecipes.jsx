import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefRecipes = () => {
    // getting selected chef's recipes data
    const chefData = useLoaderData();
    const {id, chefPicture, chefName, experience, bio, likes, numberOfRecipes} = chefData;


    // getting selected che'f recipes data
    const [recipes, setRecipes] = useState([]);
    useEffect(() =>{
        fetch(`https://b7a10-chef-recipe-hunter-server-side-mhmahdi97.vercel.app/recipes/${id}`)
        .then(res => res.json())
        .then (data => setRecipes(data))
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default ChefRecipes;