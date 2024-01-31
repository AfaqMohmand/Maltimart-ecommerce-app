import React,{useState,useEffect} from 'react'
import { Col, Container, Row } from 'reactstrap'
import Helmet from '../components/Helmet/Helmet'
import heroImg from '../assets/images/hero-img.png'
import counterImg from '../assets/images/counter-timer-img.png'
import {motion} from 'framer-motion'
import {Link} from 'react-router-dom'
import '../styles/home.css'
import Services from '../components/Services/Services'
import ProductsList from '../components/UI/ProductsList'
import products from '../assets/data/products'
import Clock from '../components/UI/Clock'


const Home = () => {
  const Year=new Date().getFullYear()
  const [trendingProducts,setTrendingProducts]=useState([])
  const [bestSaleProducts,setBestSaleProducts]=useState([])
  const [mobileProducts,setMobileProducts]=useState([])
  const [wirelessProducts,setWirelessproducts]=useState([])
  const [popularProducts,setPopularProducts]=useState([])
  useEffect(()=>{
    const filteredTrendingProducts=products.filter((item)=>item.category === 'chair')
    const filteredBestSalesProducts=products.filter((item)=>item.category === 'sofa')
    const filteredMobileProducts=products.filter((item)=>item.category === 'mobile')
    const filteredWirelessProducts=products.filter((item)=>item.category === 'wireless')
    const filteredPopularProducts=products.filter((item)=>item.category === 'watch')
    setTrendingProducts(filteredTrendingProducts)
    setBestSaleProducts(filteredBestSalesProducts)
    setMobileProducts(filteredMobileProducts)
    setWirelessproducts(filteredWirelessProducts)
    setPopularProducts(filteredPopularProducts)
  },[])
  return (
    <Helmet title={'Home'}>
      <section className='hero__section'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="hero__content">
                <p className="hero__subtitle">Trending product in {Year}</p>
                <h2>Make Your Interior more minimalistic and Modern</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo provident ullam maxime iste quam eos adipisci tempore libero architecto odio quae fugiat porro laudantium expedita quibusdam aliquid, omnis asperiores non.</p>
                <motion.button whileTap={{scale:1.2}} className='buy__btn'><Link to='/shop'>Shop Now</Link></motion.button>
              </div>
            </Col>
            <Col lg='6' md='6'>
              <div className="hero__img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
      <section className='trending__products'>
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='trending__title'>Trending Products</h2>
            </Col>
            <ProductsList data={trendingProducts}/>
          </Row>
        </Container>
      </section>
      <section className='best__sales'>
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section__title'>Best Sales</h2>
            </Col>
            <ProductsList data={bestSaleProducts} />
          </Row>
        </Container>
      </section>
      <section className='timer__count'>
        <Container>
          <Row>
            <Col lg='6' md='6'>
              <div className="clock__top-content">
                <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
                <h3 className='text-white fs-5 mb-3'>Quality Armchair</h3>
              </div>
              <Clock />
              <button className='buy__btn store__btn'><Link to='shop'>Visit Store</Link></button>
            </Col>
            <Col lg='6' md='6' className='text-end'>
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
      <section className="new__arrivals">
        <Container>
          <Row>
            <Col lg='12' className='text-center mb-5'>
              <h2 className='section__title p-4 fw-bold'>New Arrivals</h2>
            </Col>
            <ProductsList data={mobileProducts} />
            <ProductsList data={wirelessProducts} />
          </Row>
        </Container>
      </section>
      <section className="popular__category">
        <Container>
          <Row>
            <Col lg='12' className='text-center'>
              <h2 className='section__title p-4 fw-bold'>Popular in Category</h2>
            </Col>
            <ProductsList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Home