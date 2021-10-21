// Write your code here
// Write your code here
import {
  NotFoundImage,
  Heading,
  Para,
  NotFundContainer,
} from './styledComponents'

import Header from '../Header'

const NotFound = () => (
  <>
    <Header />
    <NotFundContainer>
      <NotFoundImage
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
        alt="not found"
      />
      <Heading>Lost Your Way?</Heading>
      <Para>
        Sorry, we can’t find that page. You’ll find lots to explore on the home
        page
      </Para>
    </NotFundContainer>
  </>
)
export default NotFound
