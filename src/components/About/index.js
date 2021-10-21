// Write your code here
import {DesktopImage, MobileImage} from './styledComponents'

import Header from '../Header'

const About = () => (
  <>
    <Header />
    <>
      <DesktopImage
        src="https://assets.ccbp.in/frontend/react-js/about-lg-img.png"
        alt="about"
      />
      <MobileImage
        src="https://assets.ccbp.in/frontend/react-js/about-sm-img.png"
        alt="about"
      />
    </>
  </>
)
export default About
