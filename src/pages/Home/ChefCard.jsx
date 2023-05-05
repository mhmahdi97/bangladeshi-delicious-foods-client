import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ChefCard = ({chef}) => {
    const {id, chefPicture, chefName, experience, bio, likes, numberOfRecipes} = chef;
    return (
        <>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={chefPicture} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{chefName}</h2>
                    <p className='mb-2'>{bio}</p>
                    <p><span className='font-medium text-teal-950'>Experience</span>: {experience} years</p>
                    <p><span className='font-medium text-teal-950'>Numbers of Recipes</span>: {numberOfRecipes}</p>
                    <p><span className='font-medium text-teal-950'>Likes</span>: {likes}</p>


                    <div className="card-actions justify-end">
                        <Link to={`/chefs/${id}`}>
                            <button  className="btn btn-primary">View Chefs Recipe <FaArrowRight /> </button>
                        </Link>
                    </div>
            </div>
            </div>
        </>
    );
};

export default ChefCard;