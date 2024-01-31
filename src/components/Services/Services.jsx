import React from 'react'
import { motion } from 'framer-motion'
import { Col, Container, Row } from 'reactstrap'
import './services.css'
import serviceData from '../../assets/data/serviceData'

const Services = () => {
  return (
    <section className='services'>
        <Container>
            <h2 className='text-center p-3'>Services</h2>
            <Row>
                {serviceData.map((item,index)=>{
                    return (
                        <Col lg='3' md='4' key={index}>
                    <motion.div className="service__item" style={{background:`${item.bg}`}} whileHover={{scale:1.1}}>
                        <span>
                            <i className={item.icon}></i>
                        </span>
                        <div>
                        <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                        </div>
                    </motion.div>
                    
                </Col>
                    )
                })}
                
            </Row>
        </Container>
    </section>
  )
}

export default Services