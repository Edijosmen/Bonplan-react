import React from 'react'
import PropTypes from 'prop-types'
import './style/detalle.card.css'
import { Link, Navigate, useNavigate } from 'react-router-dom'
export default function Card({ property }) {
  const navigate = useNavigate();
  const tamño = {
    width: ' 100%',
    display: 'inline-block',
    padding: '5px',
  }
  const prueba = {

    display: 'inline',

  }


  //console.log("propiedadesdfdfdf",property.imageStores[0].imgUrl);

  function handleClick(id) {
    console.log("vistaDetalle", id);
    navigate(`/detalle/${id}`);
  }

  return (
    <div className=' col-lg-4 col-md-4 col-sm-12 col-xs-12' style={tamño}>
      {property != null &&
        <div className='card'>
          <Link className='link' to={`/detalle/${property.propertyId}`}>

            <div className="row g-0">
              <div className="col-md-4">
                {property.imageStores.length > 0 && <img width='100%' height='150rem' src={property.imageStores[0].imgUrl}></img>}
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title"> {property.mcip_Name}</h5>
                  <div className='row'>
                    <div className='col-12 card-contenido'>
                      <p>{property.description.slice(0, 300)}  <strong>...Ver más!</strong></p>
                      <p style={prueba}>{property.propertyName}</p>
                      <p style={prueba} className='mb-0'>Area: {property.dimencion} m²</p>
                      <p style={prueba}>{property.dpart_Name}</p>
                      <div className='precio'>
                      {property.typeContract === 0 ? <span style={prueba}>Arriendo</span> : <span style={prueba}>Venta</span>}
                      <span style={prueba}>  $/ {property.prece}</span>
                      </div>
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