import React from 'react';
import Pizza1 from '../../images/pizza1.jpg';
import Pizza2 from '../../images/pizza2.jpg';
import Pizza3 from '../../images/pizza3.jpg';
import {Button} from '../ButtonStyles';
import {
    MenusContainer,
    MenusWrapper,
    MenuBlock,
    MenuImageBg,
    MenuImage,
    MenuContent,
    MenuH1,
    MenuP,
    MenuBtnWrapper
} from './styles';

const MenusGrid = () => {

    return (
        <MenusContainer>
            <MenusWrapper>
                <MenuBlock>
                    <MenuImageBg>
                        <MenuImage src= {Pizza1} />
                    </MenuImageBg>
                    <MenuContent>
                        <MenuH1>Menu1</MenuH1>
                        <MenuP>Description</MenuP>
                        <MenuBtnWrapper>
                            <Button to="/" primary="true" dark="true">
                            Buy
                            </Button>
                        </MenuBtnWrapper>
                    </MenuContent>
                </MenuBlock>
                <MenuBlock>
                    <MenuContent>
                        <MenuH1>Menu2</MenuH1>
                        <MenuP>Description</MenuP>
                        <MenuBtnWrapper>
                            <Button to="/" primary="true" dark="true">
                            Buy
                            </Button>
                        </MenuBtnWrapper>
                    </MenuContent>
                    <MenuImageBg>
                        <MenuImage src= {Pizza2} />
                    </MenuImageBg>
                </MenuBlock>
                <MenuBlock>
                <MenuImageBg>
                        <MenuImage src= {Pizza3} />
                    </MenuImageBg>
                    <MenuContent>
                        <MenuH1>Menu3</MenuH1>
                        <MenuP>Description</MenuP>
                        <MenuBtnWrapper>
                            <Button to="/" primary="true" dark="true">
                            Buy
                            </Button>
                        </MenuBtnWrapper>
                    </MenuContent>
                </MenuBlock>
            </MenusWrapper>
        </MenusContainer>
    )
}

export default MenusGrid;