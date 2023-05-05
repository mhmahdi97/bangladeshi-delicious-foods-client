import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefRecipes = () => {
    // getting selected chef's data
    const chefData = useLoaderData();
     // getting selected che'f recipes data
    const [recipes, setRecipes] = useState([]);
    useEffect(() =>{
        fetch(`https://b7a10-chef-recipe-hunter-server-side-mhmahdi97.vercel.app/recipes/${id}`)
        .then(res => res.json())
        .then (data => setRecipes(data))
    }, [])
    
    // destructuring the cefs data and recipes data
    const {id, chefPicture, chefName, experience, bio, likes, numberOfRecipes} = chefData;
    const { recipeName, ingredients, rating, cookingMethod, chefId} = recipes;

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col gap-4 lg:flex-row">
                    <img src={chefPicture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='ml-10'>
                    <h1 className="text-5xl font-bold">{chefName}</h1>
                    <p className="py-6">{bio}</p>
                    <p><span className='font-medium text-teal-950'>Experience</span>: {experience} years</p>
                    <p><span className='font-medium text-teal-950'>Numbers of Recipes</span>: {numberOfRecipes}</p>
                    <p className='mb-6'><span className='font-medium text-teal-950'>Likes</span>: {likes}</p>
                    <button className="btn bg-red-900 ">Add to Favourite</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecipes;