import React from 'react'
import ArticuloCard from '../components/container/articuloCard'
import ArticulosDestacados from '../components/container/articulosDestacados'
import Footer from '../components/pure/footer/footer'
import Filter from '../components/pure/home/filter'
import Servicios from '../components/pure/home/servicios'
import Navbar from '../components/pure/navbar/navbar'

function Home() {


    return (
        <div>
            <Filter></Filter>
            <Servicios></Servicios>
            <hr></hr>
           <ArticulosDestacados></ArticulosDestacados>
        </div>
    )
}

export default Home
