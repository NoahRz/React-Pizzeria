// the home page

import React, {useState} from 'react'
import { Navbar, Sidebar, Hero } from '../components'

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
        </div>
    )
}

export default Home;