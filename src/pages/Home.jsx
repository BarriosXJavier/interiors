import React from 'react';
import Nav from '../components/Nav';
import Main from '../components/Main';
import MainCategories from '../components/MainCategories';
import Footer from '../components/Footer';

const Home = () => {
    return(
        <>
            <Nav />
            <Main />
            <MainCategories />
            <Footer />
        </>
    )
}

export default Home;