import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Products from '../Products/Products';
import Review from '../Review/Review';
import UpComing from '../UpComing/UpComing';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <Products></Products>
            <UpComing></UpComing>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;