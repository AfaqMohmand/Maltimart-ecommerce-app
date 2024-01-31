import React from 'react'
import { useSelector } from 'react-redux'
import { Col, Container, FormGroup, Row,Form } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import '../styles/checkout.css'

const Checkout = () => {
  const totalQty=useSelector(state=>state.cart.totalQuantity)
  console.log("🚀 ~ file: Checkout.jsx:10 ~ Checkout ~ totalQty", totalQty)
  const totalAmount=useSelector(state=>state.cart.totalAmount)
  return (
    <Helmet>
      <CommonSection title='Check out' />
      <section>
        <Container>
          <Row>
            <Col lg='8'>
              <h6 className='mb-4 fw-bold'>Billing Information</h6>
              <Form className='billing__form'>
                <FormGroup className='form__group'>
                  <input type="text" placeholder='Enter your name' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="email" placeholder='Enter your email' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="number" placeholder='Phone No' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="text" placeholder='Enter your street' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="text" placeholder='Enter your city' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="text" placeholder='Enter your Postal Code' />
                </FormGroup>
                <FormGroup className='form__group'>
                  <input type="text" placeholder='Enter your Country' />
                </FormGroup>
              </Form>
            </Col>
            <Col lg='4'>
              <div className="checkout__cart">
                <h6>Total Qty: <span>{totalQty} Items</span></h6>
                <h6>Subtotal <span>${totalAmount}</span></h6>
                <h6>Shipping: <br />Free shipping <span>$0</span></h6>
                <h6>Total Cost: <span>${totalAmount}</span></h6>
              <button className="buy__btn btn__buy">Place an order</button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Checkout