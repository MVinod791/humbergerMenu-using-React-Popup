// Style your elements here
import styled from 'styled-components'

export const MobileImage = styled.img`
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const DesktopImage = styled.img`
  @media screen and (max-width: 767px) {
    display: none;
  }
`
