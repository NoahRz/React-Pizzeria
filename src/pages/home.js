// the home page

import React from 'react';
import {
    Hero,
    MenusGrid,
    Message
} from '../components';


const Home = () => {

    return (
        <div>
            <Hero />
            <Message />
            <MenusGrid />
        </div>
    )
}

export default Home;