// the home page

import React, {useState} from 'react'
import { Navbar, Sidebar, Hero } from '../components'
import Footer from '../components/Footer';

const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const openHandle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            <Sidebar isOpen={isOpen} openHandle={openHandle}/>
            <Navbar openHandle={openHandle} />
            <Hero />
            <Footer />
        </div>
    )
}

export default Home;