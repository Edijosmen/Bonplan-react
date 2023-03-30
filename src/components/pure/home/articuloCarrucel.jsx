import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import CardArticulo from './cardArticulo';
import Pruba from './pruba';
import './styles/home.css'

function ArticuloCarrucel(props) {

    const [artic,setArti] = useState(null);
  
    useEffect(()=>{
        setArti(props.articulo);
    })
   
    console.log("areim",props)
  return (
   
      <div id="carouselExampleControls" className="carousel slide width-carrucel" data-bs-ride="carousel">
        <div className="carousel-inner">
        {artic!==null && artic.length>0 ? 
               <>   
               <div className='carousel-item active'>
               <img width='100%' height='auto' src={artic[0].imgUrl} alt="..."/>
               </div>
               {artic.map((img,index)=> <div className="carousel-item " key={index} > <img width='100%' height='auto' src= {img.imgUrl}/></div>)}
               </>
                :
                <h5>no hay</h5>
              }
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

  )
}

ArticuloCarrucel.propTypes = {

}

export default ArticuloCarrucel

