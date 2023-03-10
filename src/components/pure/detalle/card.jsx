import React from 'react'
import PropTypes from 'prop-types'

import { Link, Navigate, useNavigate } from 'react-router-dom'
export default function  Card({property}) {
  const navigate = useNavigate();
  const tamño ={
      width : ' 100%',
      display:'inline-block',
      padding : '5px',
  }
  const prueba ={
   
    display:'inline',
    
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
       
          <div class="row g-0">
            <div class="col-md-4">
            {property.imageStores.length>0 && <img width='100%' height='150rem' src={property.imageStores[0].imgUrl}></img>}
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title"> {property.mcip_Name}</h5>
                <div className='row'>
                  <div className='col-12'>
                  <p  style={prueba}>{property.propertyName}</p>
                  <p  style={prueba} className='mb-0'>Area: {property.dimencion} m²</p>
                  <p  style={prueba}>{property.dpart_Name}</p>
                  {property.typeContracto===0 ? <h5  style={prueba}>Arriendo</h5> :<h5  style={prueba}>Venta</h5>}
                  <h5  style={prueba}>$ {property.prece}</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
       </div>
       }
  </div>
)
}