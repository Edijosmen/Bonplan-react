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
  
    console.log("propiedades",property);
    //console.log("propiedadesdfdfdf",property.imageStores[0].imgUrl);

    function handleClick (id){
        console.log("vistaDetalle",id);
        navigate(`/detalle/${id}`);
    }
  return (
    <div className=' col-lg-4 col-md-4 col-sm-12 col-xs-12' style={tamño}>
         {property != null &&
         <div>
         <Link to={`/detalle/${property.propertyId}`}>
          <div className="card text-center "  >
              <div className="card-header">
                  {property.mcip_Name}
                 
              </div>
              <div className="card-body"  >
                 
                 {property.imageStores.length>0 && <img width='100%' height='150rem' src={property.imageStores[0].imgUrl}></img>}
              </div>
              <div className="card-footer text-muted cardfooter"  >
                    <p>{property.propertyName}</p>
                    <p className='mb-0'>Area: {property.dimencion} m²</p>
                    <p>{property.dpart_Name}</p>
                    {property.typeContracto===0 ? <h5>Arriendo</h5> :<h5>Venta</h5>}
                    <h5 >$ {property.prece}</h5>
              </div>
          </div>
          </Link>
         </div>
         }
    </div>
  )
}


export default CardArticulo

