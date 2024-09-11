import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import ListCourse from './components/ListCourse'
import Calculator from './components/Calculator'
import Information from './components/Information'
import ColorBox from './components/ColorBox'
import FormatName from './components/FormatName'
import ShoppingCart from './components/shoppingCart/ShoppingCart'


export default function App() {
  const styled = {color: "red", fontSize: 20}
  return (
    <div>
    
      <Header>
      </Header>
      <h1 style={styled}>Component App</h1>
      <ListCourse></ListCourse>
      <Calculator></Calculator>
      <Information></Information>
      <ColorBox></ColorBox>
      <FormatName></FormatName>
      <ShoppingCart/>
      <Footer>
      </Footer>
    </div>
    
  )
}

