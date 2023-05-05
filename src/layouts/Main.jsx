import React, { useEffect, useState } from 'react';
import Header from '../Components/Shared/Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';
import { BeatLoader } from 'react-spinners';

const Main = () => {
    const navigation = useNavigation();
    // const [loading, setLoading] = useState(false);
    // useEffect (() => {
    //     setTimeout(() => {
    //         setLoading(true);
    //     }, 1000)
    // }, [])

    return (
        <div className='container mx-auto'>
            {
                // loading ? <BeatLoader color="#36d7b7" /> 
                // :
                // <>
                // <Header></Header>
                // {/* <div>{navigation.state === 'loading' && 'Loading...'}</div> */}
                // <Outlet></Outlet>
                // <Footer></Footer>
                // </>
            }

            <Header></Header>
            <div>{navigation.state === 'loading' && 'Loading...'}</div>
            <Outlet></Outlet>
            <Footer></Footer>
            
        </div>
    );
};

export default Main;