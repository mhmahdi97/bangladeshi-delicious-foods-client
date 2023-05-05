import React, { useEffect, useState } from 'react';
import ChefCard from './ChefCard';

const ChefCardsContainer = () => {
    const [chefs, setChefs] = useState([]);
     
    useEffect(() =>{
        fetch('https://b7a10-chef-recipe-hunter-server-side-mhmahdi97.vercel.app/chefs')
        .then(res => res.json())
        .then (data => setChefs(data))
    }, [])

    console.log(chefs);



    return (
        <div>
            <div className="mt-32">
                <h1 className="text-5xl font-bold text-center mb-10">Meet Our Experienced Chef</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-3 gap-4 lg:px-12 my-6'>
                {
                    chefs.map(chef => <ChefCard
                    key={chef.id}
                    chef = {chef}
                    ></ChefCard>)
                }
                </div>
            </div>
    </div>
    );
};

export default ChefCardsContainer;