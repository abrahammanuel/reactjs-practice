import React from 'react'
import '../assets/styles/components/Search.scss'

const main_title = '¿Qué Quieres ver hoy?'

const Search = () => (
  <section className="main">
    <h2 className="main__title">{main_title}</h2>
    <input type="text" className="input" placeholder="Buscar..."/>
  </section>

)

export default Search