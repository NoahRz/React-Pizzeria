import React from 'react';
import { Button } from '../ButtonStyles';
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
                        <MenuImage src={`/images/4 Fromaggi.jpg`} />
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
                        <MenuImage src={`/images/insalatapizza.jpg`} />
                    </MenuImageBg>
                </MenuBlock>
                <MenuBlock>
                    <MenuImageBg>
                        <MenuImage src={`/images/patatapizza.jpg`} />
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