import React, {useState, useEffect} from 'react'
import {FaBars} from 'react-icons/fa'
import {IconContext} from 'react-icons/lib'
import {animateScroll as scroll } from 'react-scroll'
import { 
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks, 
    NavBtn, 
    NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {
    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    };

    return (
        <>
        <IconContext.Provider value={{ color: '#fff'}}>
            <Nav scrollNav={scrollNav}> 
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}>GYM NATION</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="achieve" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Achieve success</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="app" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Our App</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="coaches" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Workouts and coaches</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="community" smooth={true} duration={500} spy={true} exact='true' offset={-80}>Community</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
            </IconContext.Provider>
        </>
    );
};

export default Navbar;