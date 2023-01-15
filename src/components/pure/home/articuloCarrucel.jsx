import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import CardArticulo from './cardArticulo';
import Pruba from './pruba';
import './styles/home.css'

function ArticuloCarrucel(props) {

    const [artic,setArti] = useState(null);
    const img =props
    useEffect(()=>{
        setArti(props.articulo);
    })
   
    console.log("areim",props)
  return (
   
      <div id="carouselExampleControls" className="carousel slide width-carrucel" data-bs-ride="carousel">
        <div class="carousel-inner">
        {artic!==null && artic.imageStores.length>0 ? 
               <>   
               <div className='carousel-item active'>
               <img width='100%' height='auto' src={artic.imageStores[0].imgUrl} alt="..."/>
               </div>
               {artic.imageStores.map((img,index)=> <div className="carousel-item "><img width='100%' height='auto' src= {img.imgUrl}/></div>)}
               </>
                :
                <h5>no hay</h5>
              }
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

  )
}

ArticuloCarrucel.propTypes = {

}

export default ArticuloCarrucel

