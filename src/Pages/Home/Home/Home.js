import React from 'react';
import Footer from '../../Footer/Footer';
import Banner from '../Banner/Banner';
import Post from '../Posts/Post';
import Products from '../Products/Products';
import SmallBanner from '../SmallBanner/SmallBanner';

const Home = () => {
         return (
                  <div>
                   <Banner />
                   <SmallBanner />
                   <Products />
                   <Post />
                   <Footer />
                  </div>
         );
};

export default Home;