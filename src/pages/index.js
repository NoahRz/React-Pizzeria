// the home page

import React, {useState} from 'react';
import {Hero} from '../components';
import Footer from '../components/Footer';
import MenusGrid from '../components/MenusGrid';
import Message from '../components/Message';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openHandle = () => {
        setIsOpen(!isOpen);
    }

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