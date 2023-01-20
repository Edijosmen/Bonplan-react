import React, { useMemo, useState } from 'react'

import PropTypes from 'prop-types'
import HttpClient from '../../services/HttpClient'
import { useEffect } from 'react'
import Card from '../pure/detalle/card'
import { Property } from '../../models/property.class'
import { useSelector } from 'react-redux'

function ArticuloCardList(props) {
    const filterState = useSelector((state)=>state.filter);
    console.log("filterstate",filterState);
    const [filter,setfile] = useState(filterState);
    const user = useMemo(()=>(
        {
            search:filter.search,
            desde:filter.desde,
            hasta:filter.hasta,
            estado:filter.estado,
            tipo:filter.tipo,
            nHabitacion:filter.nHabitacion,
            nBaños:filter.nBaños,
        }
    )[filter.search,filter.desde,filter.hasta,filter.estado,filter.tipo,filter.nHabitacion,filter.nBaños]);

    const [articulo,setArticulo] = useState([])
    useEffect(() =>{
        HttpClient.post('Property/Filters',filterState).then((response) =>{
            console.log(response);
            setArticulo(response.data.data);
        },(err) =>{
            console.log(err);
        })
        setfile(filterState);
    } ,[props.num]);
    console.log("articulo",articulo);
  return (
    <div className='container mt-5 pb-5'>
        <div className=''>
        {articulo.length>0 ? 
            articulo.map((property,index)=><Card property={property} key={index}></Card>)
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

