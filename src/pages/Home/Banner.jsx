import React from 'react';

const Banner = () => {
    return (
        <>
        <div className="hero min-h-screen" style={{ backgroundImage: `url("https://i.ibb.co/1M8RNxx/banner-img-compressed.png")` }}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-teal-50">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Welcome to Bangladeshi Delicious Foods</h1>
                <p className="mb-5 text-justify">Hungry? Wanna make some delicious foods? Discover the flavors of Bangladesh with our collection of delicious recipes and chef profiles! From traditional dishes to modern creations, our recipes is perfect for food lovers and home cooks. Learn from top Bangladeshi chefs and explore the unique spices and ingredients that make Bangladeshi cuisine so special. Get ready to take your taste buds on an unforgettable journey!</p>
                <button className=" bg-teal-600  hover:bg-teal-700 px-4 py-2 rounded-md text-white font-semibold text-center">View Recipes</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Banner;