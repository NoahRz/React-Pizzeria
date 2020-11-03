import React, {useEffect, useState} from 'react';
import {
    MessageContainer,
    MessageWrapper,
} from './styles'

const Message = () => {

    const scrollstart = 240; 
    const duration = 500;

    const [scrollRight, setScrollRight] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const changeNav = () => {
        if(window.scrollY >= scrollstart && window.scrollY <= (scrollstart + duration / 2)){
            setScrollLeft((window.scrollY - scrollstart)/(duration/Math.PI));
        } else if (window.scrollY > scrollstart + duration / 2 && window.scrollY <= scrollstart + duration) {
            setScrollLeft((window.scrollY - scrollstart)/(duration/Math.PI));
            setScrollRight((window.scrollY - (scrollstart + duration / 2))/(duration/Math.PI));
        } else if (window.scrollY > scrollstart + duration && window.scrollY <= scrollstart + (1.5 * duration)) {
            setScrollLeft(0);
            setScrollRight((window.scrollY - (scrollstart + duration / 2))/(duration/Math.PI));
        }
        else {
            setScrollLeft(0);
            setScrollRight(0);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    return(
        <MessageContainer>
            <MessageWrapper scrollLeft= {scrollLeft} scrollRight={scrollRight}>
            Taste your favourite pizzas like never before
            </MessageWrapper>
        </MessageContainer>
    )
    
}
export default Message;

// Taste your favourite pizzas like never before
// Have a good time in a unique place
// Just eat it