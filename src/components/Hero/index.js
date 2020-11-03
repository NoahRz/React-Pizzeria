import React, {useState} from 'react';
import Video from '../../videos/video.mp4';
import {Button} from '../ButtonStyles';
import {
    HeroContainer,
    HeroBg,
    HeroVideo,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './styles';

const Hero = () => {

    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <>
            <HeroContainer>
                <HeroBg>
                    <HeroVideo autoPlay loop muted src={Video} type='video/mp4' />
                </HeroBg>                        
                 <HeroContent>
                    <HeroH1>Welcome to Pizzeria</HeroH1>
                    <HeroP>Discover the most authentic pizzas</HeroP>
                    <HeroBtnWrapper>
                        <Button to="signup" onMouseEnter= {onHover} onMouseLeave={onHover} primary="true" dark="true">
                            Get started {hover ? <ArrowForward /> : <ArrowRight />}
                        </Button>
                    </HeroBtnWrapper>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default Hero;