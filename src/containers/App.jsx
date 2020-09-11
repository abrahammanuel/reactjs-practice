import '../assets/styles/App.scss'

import React, { useState, useEffect } from 'react'
import Header from '../components/Header'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Carousel from '../components/Carousel'
import CarouselItem from '../components/CarouselItem'
import Footer from '../components/Footer'
import useInitialState from '../hooks/useInitialState'

const API = 'http://localhost:3000/initalState'


const App = () => {
  const initialState = useInitialState(API)
  return(
    <div className="App">
      <Header/>
      <Search/>

      {sections(initialState.mylist)}
      {sections(initialState.trends)}
      {sections(initialState.originals)}
      

      <Footer/>
    </div>
)
}

const sections = ( sec) => {
  return(
        sec.length > 0 &&
        <Categories title='Tendencias'>
          <Carousel>
          {sec.map(item =>
              <CarouselItem key={item.id} {...item} />
            )}
          </Carousel>
        </Categories>
  )
}

export default App