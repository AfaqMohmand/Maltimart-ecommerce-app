import React, { useRef, useEffect } from "react";
import "./header.css";
import { Container, Row } from "reactstrap";
import logo from "../../assets/images/eco-logo.png";
import { motion } from "framer-motion";
import userIcon from "../../assets/images/user-icon.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import UseAuth from "../../custom-hooks/UseAuth";
import {signOut} from 'firebase/auth'
import {auth} from '../../firebase.config'
import { toast } from "react-toastify";

const nav__link = [
  {
    path: "home",
    display: "Home",
  },
  {
    path: "shop",
    display: "Shop",
  },
  {
    path: "cart",
    display: "Cart",
  },
];

const Header = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const navigate = useNavigate();
  const currentUser = UseAuth();
  const profileActionRef=useRef(null)
 const toggleProfileActions=()=>profileActionRef.current.classList.toggle('show__profileActions')
 const logout=()=>{
  signOut(auth).then(()=>{
    toast.success('Logged Out')
    navigate('/home')
  }).catch(err=>{
    toast.error(err.message)
  })
 }
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav__wrapper">
            <div className="logo">
              <img src={logo} alt="" />
              <div>
                <h1>Multimart</h1>
              </div>
            </div>
            <div className="navigation">
              <ul className="menu">
                <li className="nav_item">
                  <NavLink to="home">Home</NavLink>
                </li>
                <li className="nav_item">
                  <NavLink to="shop">Shop</NavLink>
                </li>
                <li className="nav__item">
                  <NavLink to="cart">Cart</NavLink>
                </li>
              </ul>
            </div>
            <div className="nav__icons">
              <span className="fav__icon">
                <i className="ri-heart-line"></i>
                <span className="badge">1</span>
              </span>
              <span className="cart__icon" onClick={() => navigate("/cart")}>
                <i className="ri-briefcase-4-line"></i>
                <span className="badge">{totalQuantity}</span>
              </span>
              <div className="profile">
                <motion.img
                  whileTap={{ scale: 1.2 }}
                  src={currentUser ? currentUser.photoURL : userIcon}
                  onClick={toggleProfileActions}
                  alt=""
                />
                <div className="profile__actions" ref={profileActionRef} onClick={toggleProfileActions}>
                  {currentUser ? (
                    <span onClick={logout}>Logout</span>
                  ) : (
                    <div className="d-flex justify-content-between align-items-center flex-column">
                      {" "}
                      <Link to="/signup">Signup</Link>
                      <Link to="/login">Login</Link>
                    </div>
                  )}
                </div>
              </div>

              <div className="mobile__menu">
                <span>
                  <i className="ri-menu-line"></i>
                </span>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
