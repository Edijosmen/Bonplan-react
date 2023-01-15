import React, { useState } from 'react'
import PropTypes from 'prop-types'
import HttpClient from '../../services/HttpClient'
import { useEffect } from 'react'
import CardArticulo from '../pure/home/cardArticulo'
import { Property } from '../../models/property.class'
function ArticuloCardList() {
    
    const [articulo,setArticulo]= useState([])
    useEffect(() =>{
        HttpClient.get('Property/GetAll').then((response) =>{
            console.log(response);
            setArticulo(response.data.data);
        },(err) =>{
            console.log(err);
        })
    } ,[])
    console.log("articulo",articulo);
  return (
    <div className='container mt-5 pb-5'>
        <div className='row'>
        {articulo.length>0 ? 
            articulo.map((property,index)=><CardArticulo property={property} key={index}></CardArticulo>)
            :
            <h3>ho hay articulo</h3>
        }
        </div>
      
    </div>
  )
}

ArticuloCardList.propTypes = {
   
}

export default ArticuloCardList

