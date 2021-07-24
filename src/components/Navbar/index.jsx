import React from 'react'
import { MobileIcon, Nav, NavbarContainer, NavBtn, NavBtnLink, NavItem, NavLinks, NavLogo, NavMenu } from './NavbarElements'
import { FaBars } from 'react-icons/fa'

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to="/">
                        nukang.id
                    </NavLogo>

                    <MobileIcon>
                        <FaBars />
                    </MobileIcon>
                    {/* <NavMenu>
                        <NavItem>
                            <NavLinks to='login'>Login</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='register'>Register</NavLinks>
                        </NavItem>
                    </NavMenu> */}
                    <NavBtn>
                        <NavBtnLink to='/login'>
                            Login
                        </NavBtnLink>
                        <NavBtnLink to='/register'>
                            Register
                        </NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </>
    )
}

export default Navbar
