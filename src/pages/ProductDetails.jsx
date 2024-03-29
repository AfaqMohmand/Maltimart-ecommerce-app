import React,{useState,useRef,useEffect} from "react";
import { useParams } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import products from "../assets/data/products";
import "../styles/product-details.css";
import ProductsList from "../components/UI/ProductsList";
import { useDispatch } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { toast } from "react-toastify";


const ProductDetails = () => {
  const { id } = useParams();
  console.log("🚀 ~ file: ProductDetails.jsx:16 ~ ProductDetails ~ id", id)
  const [tab,setTab]=useState('desc')
  const [rating,setRating]=useState(null)
  const reviewUser=useRef('')
  const reviewMsg=useRef('')
  const dispatch=useDispatch()
  const product = products.find((item) => {
    return item.id === id;
  });

  const submitHandler=(e)=>{
    e.preventDefault()
    const reviewUserName=reviewUser.current.value
    const reviewUserMsg=reviewMsg.current.value
    const reviewObj={
      userName:reviewUserName,
      text:reviewUserMsg,
      rating
    }
      toast.success('review Submitted successfully')   
  }
  const addToCart=()=>{
    dispatch(
      cartActions.addItem({
        id,
        image:imgUrl,
        productName,
        price
      })
    )
    toast.success('product added successfully')
  }

  const {
    imgUrl,
    productName,
    price,
    avgRating,
    reviews,
    description,
    shortDesc,
    category
  } = product;
  const relatedProducts=products.filter(item=>item.category === category)
  return (
    <Helmet title={productName}>
      <CommonSection title={productName}/>
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6">
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg="6">
              <div className="product__details">
                <h2>{productName}</h2>
                <div className="product__rating d-flex align-items-center gap-5 mb-3">
                  <div>
                    <span>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-s-fill"></i>
                      <i className="ri-star-half-s-line"></i>
                    </span>
                  </div>
                </div>
                <p>
                  {" "}
                  (<span> {avgRating} </span>ratings)
                </p>
              </div>
    <div className="d-flex align-items-center gap-5">
    <span className="product__price">${price}</span>
    <span>Category:{category.toUpperCase()}</span>
    </div>
              <p className="mt-5">{shortDesc}</p>
              <button className="buy__btn" onClick={addToCart}>Add to cart</button>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="">
        <Container>
          <Row>
            <Col lg='12'>
              <div className="tab__wrapper d-flex align-items-center gap-5">
                <h6 className={`${tab === 'desc' ? 'active__tab' : " "}`} onClick={()=>setTab('desc')}>Description</h6>
                <h6 className={`${tab === 'rev' ? 'active__tab' : " "}`} onClick={()=>setTab('rev')}>Reviews ({reviews.length})</h6>
              </div>
              {tab === 'desc' ? <div className="tab__content mt-4">
                <p>{description}</p>
              </div> : (
                <div className="product__review">
                  <div className="review__wrapper">
                    <ul>
                      {reviews.map((item,index)=>{
                        return (
                          <li key={index} className="mb-4">
                            <h6>John Doe</h6>
                            <span>{item.rating} (average rating)</span>
                            <p>{item.text}</p>
                          </li>
                        )
                      })}
                    </ul>
                    <div className="review__form">
                      <h4>Leave Your Experience</h4>
                      <form action="" onSubmit={submitHandler}>
                        <div className="form__group">
                          <input type="text" placeholder="Enter Name" ref={reviewUser}/>
                        </div>
                        <div className="form__group d-flex align-items-center gap-5 rating__group">
                      <span onClick={()=>setRating(1)}>1 <i className="ri-star-s-fill"></i></span>
                      <span onClick={()=>setRating(2)}>2 <i className="ri-star-s-fill"></i></span>
                      <span onClick={()=>setRating(3)}>3 <i className="ri-star-s-fill"></i></span>
                      <span onClick={()=>setRating(4)}>4 <i className="ri-star-s-fill"></i></span>
                      <span onClick={()=>setRating(5)}>5 <i className="ri-star-s-fill"></i></span>
                        </div>
                        <div className="form__group">
                          <textarea rows={4} type="text" placeholder="Review Message..." ref={reviewMsg} />
                        </div>
                        <button className="buy__btn" type="submit">Submit</button>
                      </form>
                    </div>
                  </div>
                </div>
              )}
              
            </Col>
            <Col lg='12' className="mt-5">
              <h2 className="related__title">You Might also like</h2>
              <div className="d-flex justify-content-between gap-3 flex-wrap">
              <ProductsList data={relatedProducts} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
