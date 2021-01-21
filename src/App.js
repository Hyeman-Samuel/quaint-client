import React from 'react'
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './components/home/home'
import TopNavBar from './components/navbar/navbar'
import Footer from './components/footer/footer'
import Catalogue from './components/catalogue/catalogue'
import Product from './components/product/product'
import Cart from './components/cart/cart'
import Profile from './components/profile/profile'
import Checkout from './components/checkout/checkout'
import Wishlist from './components/wishlist/wishlist'
//import History from './utility/history'

export const Routing = (
<React.StrictMode>
    <BrowserRouter  >
    <TopNavBar/>
      <Route exact path='/' component={Home} />
      <Route exact path='/catalogue' component={Catalogue} />
      <Route exact path='/product/:id' render={(props)=><Product {...props}/> }  />
      <Route exact path='/cart' component={Cart} />
      <Route exact path='/profile' component={Profile} />
      <Route exact path='/checkout' component={Checkout} />
      <Route exact path='/wishlist' component={Wishlist} />
      {/* <Route exact path='*' component={NotFound} /> */}     
    </BrowserRouter>
  </React.StrictMode>
) ;
