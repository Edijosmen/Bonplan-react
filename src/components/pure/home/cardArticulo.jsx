import React from 'react'
import PropTypes from 'prop-types'
import  './styles/home.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'

//import { Property } from '../../../models/property.class'
function CardArticulo({property}) {
    const navigate = useNavigate();
    const tamño ={
        width : ' 18rem',
        display:'inline-block',
        padding : '5px',
    }
  

    function handleClick (id){
        console.log("vistaDetalle",id);
        navigate(`/detalle/${id}`);
    }
  return (
    <div className=' col-lg-4 col-md-4 col-sm-12 col-xs-12' style={tamño}>
         {property != null &&
         <div>
         <Link className='card-articulo' to={`/detalle/${property.propertyId}`}>
          <div className="card text-center "  >
              <div className="card-header">
                  <span>{property.mcip_Name}</span>
                 
              </div>
              <div className="card-body"  >
                 
                 {property.imageStores.length>0 && <img width='100%' height='150rem' src={property.imageStores[0].imgUrl}></img>}
              </div>
              <div className="card-footer text-muted cardfooter"  >
                    <p>Tipo de Propiedad: {property.propertyName}</p>
                    <p className='mb-0'>Area: {property.dimencion}</p>
                    <p>{property.dpart_Name}</p>
                    <div className='precio'>
                    {property.typeContract === 0 ? <span>Arriendo</span> :<h5>Venta</h5>}
                    <span > $ {property.prece}</span>
                    </div>
              </div>
          </div>
          </Link>
         </div>
         }
    </div>
  )
}


export default CardArticulo

