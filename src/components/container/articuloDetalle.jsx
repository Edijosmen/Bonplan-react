import React, { useEffect, useState } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import HttpClient from '../../services/HttpClient'
import ArticuloCarrucel from '../pure/home/articuloCarrucel';
import './styles/styles.module.container.css'
import Contact from '../form/contact';
export default function ArticuloDetalle() {
    let { propertyId } = useParams();
    const [articulo,setArticulo] = useState(null);
    useEffect(()=>{
        HttpClient.get(`/Property/GetById?propertyId=${propertyId}`).then((response)=>{
            setArticulo(response.data.data);
            console.log(response.data);
        },error=>{console.log(error)})
        
    },[])
    
  return (
    <div className=' container'>
      {articulo!=null && 
        <div>
        <div className='encabezado'>
              <span>{articulo.typeContract ===0 ? <p>Arriendo</p>:<p>Venta</p>}</span>
              <span>{articulo.propertyName}</span>
              <span className='prece'>${articulo.prece}</span>
        </div>
        <div className=' row justify-content-center'>
          
          <div className='col-lg-4  col-md-4 col-sm-12 col-xs-12'>
            <ArticuloCarrucel articulo={articulo} ></ArticuloCarrucel>
          </div>
        </div>
       
        <div className='row'>
         <div className='col-lg-8 col-md-6 col-sm-12 col-xs-12'>
            <h4 className='text-start'>Descripción</h4>
            <hr/>
            
            <blockquote class="blockquote">
            <p className='text-start'>{articulo.description}</p>
            </blockquote>
         </div>
         <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
           
            <Contact></Contact>
         </div>
        </div>
        </div>

      }
    </div>
  )
}
