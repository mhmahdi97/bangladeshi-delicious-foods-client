import React from 'react';
import Header from '../Components/Shared/Header/Header';
import { Outlet, useNavigation } from 'react-router-dom';
import Footer from '../Components/Shared/Footer/Footer';

const Main = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Header></Header>
            <div>{navigation.state === 'loading' && 'Loading...'}</div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;