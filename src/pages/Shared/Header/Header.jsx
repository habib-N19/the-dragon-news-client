import React from 'react'
import logo from '../../../assets/logo.png'
import moment from 'moment'
import { Button, Container } from 'react-bootstrap'
import Marquee from 'react-fast-marquee'
const Header = () => {
  return (
    <Container>
      <div className='text-center'>
        <img src={logo} alt='' />
        <p className='text-secondary'>
          <small>Journalism Without Fear or Favor</small>
        </p>
        <p>{moment().format('dddd, MMMM D, YYYY')}</p>
      </div>
      <div>
        <Button variant='danger'>Latest</Button>
        <Marquee
          pauseOnClick={true}
          speed={60}
          className='text-danger'
          gradient={true}
          gradientColor={[255, 155, 55]}
        >
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>
    </Container>
  )
}

export default Header
