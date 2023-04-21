import React from 'react'
import Header from '../pages/Shared/Header/Header'
import Footer from '../pages/Shared/Footer/Footer'
import { Col, Container, Row } from 'react-bootstrap'
import LeftNav from '../pages/Shared/LeftNav/LeftNav'
import RIghtNav from '../pages/Shared/RightNav/RIghtNav'

const Main = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={3}>
            <LeftNav></LeftNav>
          </Col>
          <Col lg={6}>
            <h2>main content coming soon.....</h2>
          </Col>
          <Col lg={3}>
            <RIghtNav></RIghtNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  )
}

export default Main