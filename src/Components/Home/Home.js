import React from 'react';
import Blog from '../Blog/Blog';
import Display from '../Display/Display';
import Header from '../Header/Header';
import Feature from '../Feature/Feature';
import Dot from '../Dot/Dot'
import NavBar from '../Navbar/Navbar';
import Ship from '../Ship/Ship'
import Footer from '../Footer/Footer';
const Home = () => {
  return (
    <div>
      <Header />
      <NavBar/>
      <Display/>
      <Blog/>
    <Feature/>
 <Dot/>
 <Ship/>
      <Footer/>
    </div>
  )
}

export default Home
