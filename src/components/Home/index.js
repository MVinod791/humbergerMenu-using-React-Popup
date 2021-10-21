// Write your code here
import {DesktopHomeImage, MobileHomeImage} from './styledComponents'

import Header from '../Header'

const Home = () => (
  <>
    <Header />
    <div>
      <MobileHomeImage
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png"
        alt="home"
      />
      <DesktopHomeImage
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png "
        alt="home"
      />
    </div>
  </>
)
export default Home
