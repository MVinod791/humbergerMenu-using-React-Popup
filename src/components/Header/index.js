// Write your code here
import Popup from 'reactjs-popup'

import {Link} from 'react-router-dom'

import {GiHamburgerMenu} from 'react-icons/gi'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'
import {IoMdClose} from 'react-icons/io'

import {
  NavMenu,
  NavHeader,
  NavContent,
  Heading,
  NavLink,
  NavItem,
  CloseButton,
  HamBurgerButton,
  ModelCloseContainer,
} from './styledComponents'

import './index.css'

const Header = () => (
  <NavHeader>
    <NavContent>
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>

      <Popup
        modal
        trigger={
          <HamBurgerButton data-testid="hamburgerIconButton">
            <GiHamburgerMenu className="menu" />
          </HamBurgerButton>
        }
        className="popup-content"
      >
        {close => (
          <ModelCloseContainer>
            <CloseButton
              type="button"
              onClick={() => close()}
              data-testid="closeButton"
            >
              <IoMdClose size="30" color="#616e7c" />
            </CloseButton>

            <NavMenu>
              <NavItem>
                <NavLink to="/">
                  <AiFillHome size="36" color="#616e7c" />
                  <Heading>Home</Heading>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/about">
                  <BsInfoCircleFill size="32" color="#616e7c" />
                  <Heading>About</Heading>
                </NavLink>
              </NavItem>
            </NavMenu>
          </ModelCloseContainer>
        )}
      </Popup>
    </NavContent>
  </NavHeader>
)

export default Header
