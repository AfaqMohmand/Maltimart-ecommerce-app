import React from "react";
import { Col, Container, Row } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/cart.css";
import tdImg from "../assets/images/arm-chair-01.jpg";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount=useSelector(state=>state.cart.totalAmount)
  return (
    <Helmet title="Cart">
      <CommonSection title="Shopping Cart" />
      <section>
        <Container>
          <Row>
            <Col lg="9">
              {cartItems.length === 0 ? (
                <h2 className="fw-bold text-center">No Items in the cart</h2>
              ) : (
                <table className="table bordered">
                  <thead>
                    <tr>
                      <th>Image</th>
                      <th>title</th>
                      <th>price</th>
                      <th>Qty</th>
                      <th>Delete</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cartItems.map((item, index) => {
                      return <Tr item={item} key={index} />;
                    })}
                  </tbody>
                </table>
              )}
            </Col>
            <Col lg="3">
              <div>
                <h6 className="d-flex justify-content-between align-items-center">Subtotal   <span className="fs-4 fw-bold">${totalAmount}</span></h6>
              
              </div>
              <p className="fs-6 mt-2">Taxes and shipping will calculate in checkout</p>
              <button className="buy__btn w-100 "><Link to='/checkout'>Continue Checkout</Link></button>
              <button className="buy__btn w-100 mt-3"><Link to='/shop'>Continue Shipping</Link></button>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};
const Tr = ({item}) => {
  const dispatch=useDispatch()
  const deleteProduct=()=>{
    dispatch(cartActions.deleteItem(item.id))
  }
  return (
    <tr>
      <td>
        <img src={item.imgUrl} alt="" />
      </td>
      <td>{item.productName}</td>
      <td>${item.price}</td>
      <td>{item.quantity}px</td>
      <td>
        <i className="ri-delete-bin-line" onClick={deleteProduct}></i>
      </td>
    </tr>
  );
};

export default Cart;
