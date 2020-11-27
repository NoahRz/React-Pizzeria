// the home page

import React, {useState} from 'react';
import {
    Hero,
    Footer,
    MenusGrid,
    Message
} from '../components';


const Home = () => {

    return (
        <div>
            <Hero />
            <Message />
            <MenusGrid />
            <Footer />
        </div>
    )
}

export default Home;