import React,{useEffect,useState } from 'react'
import CardArticulo from '../pure/home/cardArticulo';
import HttpClient from '../../services/HttpClient'
import './styles/styles.module.container.css'
export default function ArticulosDestacados() {

    const [articulo,setArticulo] = useState([]);
    useEffect(()=>{
        HttpClient.get('Property/GetAll').then((response) =>{
            console.log("response",response);
            setArticulo(response.data.data);
        },(err) =>{
            console.log("err",err);
        })
    },[])
    console.log("artr", articulo);
    console.log("artrbee", articulo[1]);
  return (
    <div>
        {articulo != null && articulo.length>0 ? 
          <div id="carouselExampleControls" className="carousel slide carrusel" data-bs-ride="carousel">
              <div class="carousel-inner">
                  <div class="carousel-item active">
                    <CardArticulo property={articulo[0]}></CardArticulo>
                    <CardArticulo property={articulo[1]}></CardArticulo>
                    <CardArticulo property={articulo[2]}></CardArticulo>
                  </div>
                  <div class="carousel-item">
                    <CardArticulo property={articulo[0]}></CardArticulo>
                    <CardArticulo property={articulo[1]}></CardArticulo>
                    <CardArticulo property={articulo[2]}></CardArticulo>
                 
                  </div>
                  
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
          : <span>no hay datos!!</span>
        }
    </div>
  )
}
