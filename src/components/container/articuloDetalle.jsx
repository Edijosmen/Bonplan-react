import React, { useEffect, useState } from 'react'
import {FaBath} from 'react-icons/fa';
import {RxSpaceBetweenHorizontally,RxRulerSquare} from 'react-icons/rx'

import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import HttpClient from '../../services/HttpClient'
import ArticuloCarrucel from '../pure/home/articuloCarrucel';
import './styles/styles.module.container.css'
import Contact from '../form/contact';
export default function ArticuloDetalle() {
    let { propertyId } = useParams();
    var listCaract =[];
    const [articulo,setArticulo] = useState(null);

    useEffect(()=>{
        HttpClient.get(`/Property/GetById?propertyId=${propertyId}`).then((response)=>{
            setArticulo(response.data.data);
            console.log(response.data);
        },error=>{console.log(error)})
        
    },[])
    console.log("articulo",articulo);
   if(articulo != null){
    listCaract= articulo.caracteristicas.split(",");
   }

    console.log("lista",listCaract)
  return (
    <div className=' container'>
      {articulo != null &&
        <div>
          <div className='encabezado'>
            <span>{articulo.typeContract === 0 ? <p>Arriendo</p> : <p>Venta</p>}</span>
            <span>{articulo.propertyName}</span>
            <span className='prece'>${articulo.prece}</span>
          </div>
          <div className=' row justify-content-center'>

            <div className='col-lg-4  col-md-4 col-sm-12 col-xs-12'>
              <ArticuloCarrucel articulo={articulo.imageStores} ></ArticuloCarrucel>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-8 col-md-6 col-sm-12 col-xs-12'>
              <h4 className='text-start'>Descripción</h4>
              <hr />

              <blockquote className="blockquote">
                <p className='text-start'>{articulo.description}</p>
              </blockquote>
            </div>
            <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>

              <Contact></Contact>
            </div>
          </div>
          <div className="row detalle">
            
            <div className='col-lg-8 col-md-6 col-sm-12 col-xs-12'>
            <h4 className='text-start'>Detalle</h4>
            <hr />
              <div className='detalle-item'>
                <div className='atrib-icon'>
                  <RxRulerSquare className='fa-icon'></RxRulerSquare>
                  <div className='atrib'>
                    <strong>Area</strong>
                    <span>{articulo.dimencion}</span>
                  </div>
                </div>
                <div className='atrib-icon'>
                  <FaBath className='fa-icon'></FaBath>
                  <div className='atrib'>
                    <strong>Baños</strong>
                    <span>{articulo.nBanio}</span>
                  </div>
                </div>
                <div className='atrib-icon'>
                  <RxSpaceBetweenHorizontally className='fa-icon'></RxSpaceBetweenHorizontally>
                  <div className='atrib'>
                    <strong>Habitaciones</strong>
                    <span>{articulo.nHabitacion}</span>
                  </div>
                </div>
               
              </div>
              <hr />
            </div>
          </div>
          <div className='row'>
            <div className='col-12 col-lg-8 col-md-6 col-sm-12 col-xs-12'>
              <h4 className='text-start'>Caracteristicas</h4>
              <hr />
              <span className="row">
              {listCaract.length>0 ?
                  listCaract.map((item,index)=> <p key={index} className='text-start'>- {item}</p>)
                  :
                  <h3>ho hay articulo</h3>
              }
                
              </span>
            </div>
          </div>
          
        </div>

      }
    </div>
  )
}
