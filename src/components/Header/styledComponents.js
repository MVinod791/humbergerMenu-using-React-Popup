// Style your elements here
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const NavHeader = styled.div`
  display: flex;
  justify-content: center;
  box-shadow: 0px 0px 0px 1px #dcdcdc;
`

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  padding-top: 12px;
  padding-bottom: 12px;
  @media screen and(min-width:768px) {
    max-width: 1110px;
    padding-top: 24px;
    padding-bottom: 24px;
  }
`

export const NavMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`

export const NavItem = styled.li`
  list-style-type: none;
`

export const NavLink = styled(Link)`
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Heading = styled.h1`
  color: #616e7c;
  font-family: 'Roboto';
  font-size: 24px;
  margin-left: 10px;
`
export const ModelCloseContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;
  width: 85%;
  @media screen and(min-width:768px) {
    max-width: 1110px;
  }
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
  padding-right: 20px;
`
export const HamBurgerButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`
