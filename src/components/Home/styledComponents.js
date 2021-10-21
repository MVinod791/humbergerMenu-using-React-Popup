// Style your elements here
import styled from 'styled-components'

export const MobileHomeImage = styled.img`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const DesktopHomeImage = styled.img`
  @media screen and (max-width: 767px) {
    display: none;
  }
`
