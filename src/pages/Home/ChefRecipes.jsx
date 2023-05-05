import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import RecipeCard from './RecipeCard';

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
        <>
           <div className='mb-20'>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col gap-4 lg:flex-row">
                        <img src={chefPicture} className="max-w-sm rounded-lg shadow-2xl" />
                        <div className='ml-10'>
                        <h1 className="text-5xl font-bold">{chefName}</h1>
                        <p className="py-6">{bio}</p>
                        <p><span className='font-medium text-teal-950'>Experience:</span> {experience} years</p>
                        <p><span className='font-medium text-teal-950'>Numbers of Recipes:</span> {numberOfRecipes}</p>
                        <p className='mb-6'><span className='font-medium text-teal-950'>Likes:</span>: {likes}</p>
                        
                        </div>
                    </div>
                </div>
           </div>

           <div>
            <h1 className='text-center font-bold mb-16 text-4xl'>His Recipes:</h1>
            
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-3 gap-4 lg:px-12 my-6'>
            {
                recipes.map(recipe => <RecipeCard
                    recipe ={recipe}
                ></RecipeCard>)
            }
            </div>
           </div>
        </>
    );
};

export default ChefRecipes;