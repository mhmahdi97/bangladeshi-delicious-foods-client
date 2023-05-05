import React, { useState } from 'react';
import { Toaster, toast } from 'react-hot-toast';

const RecipeCard = ({recipe}) => {
    const {recipeName, ingredients, rating, cookingMethod, chefId} = recipe;
    
     // favourite button handler
    const [disabled, setDisabled] = useState(true);
    const handleFavourite = () => {
        toast('Added to Favourites!', {
            icon: '❤️',
        });
        setDisabled(false);
    }


    return (
        <>
        <Toaster
                position="top-center"
                reverseOrder={false}
            />
        <div className="card w-96 bg-base-100 shadow-xl border">
            <div className="card-body">
                <h2 className="card-title">{recipeName}</h2>
                <p><span className='font-medium text-teal-950'>Ingredeints Needed:</span> {ingredients}</p>
                <p><span className='font-medium text-teal-950'>Cooking Method:</span> {cookingMethod}</p>
                <p><span className='font-medium text-teal-950'>Ratings:</span> {rating}</p>
                <button onClick={handleFavourite} disabled={!disabled} className="btn bg-red-900 ">Add to Favourite</button>
                
            </div>
        </div>
        </>
    );
};

export default RecipeCard;