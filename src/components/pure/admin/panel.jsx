import React, { useEffect, useState } from 'react'

import httpclient from '../../../services/HttpClient'
import './styles/panel.css'
import Modal from './form/modal'
import $ from 'jquery';

export default function Panel() {
    const [productos,setProductos] = useState();
    const [search,setSearch] = useState();
    const [idProperty, setIdProperty] = useState();

    const handleSearchChange = (e) => {
      setSearch(e.target.value);
      if(e.target.value.length > 0) {
        httpclient.get(`Property/GetById?propertyId=${e.target.value}`)
      .then(response => {
        setProductos(response.data.data);
      })
      .catch(error => {
        console.error(error);
      });
      }else{
        httpclient.get("Property/GetByPage?PageNumber=1&pageSize=10")
                  .then(response => {
                    setProductos(response.data.data);
                  })
                  .catch(error => {
                    console.error(error);
                  });
      }
      
    }
    useEffect(() => {
        httpclient.get("Property/GetByPage?PageNumber=1&pageSize=10")
                  .then(response => {
                    setProductos(response.data.data);
                  })
                  .catch(error => {
                    console.error(error);
                  });
    },[]);
     
    const  Alert = () => {
      return (
      <div className="alert alert-panel alert-danger alert-dismissible fade show" role="alert">
          <button type="button" 
          className="btn-close" 
          data-bs-dismiss="alert" 
          aria-label="Close"></button>
          <div >
          <p> <strong>no se encontraron datos</strong></p>
          </div>
         
      </div>
      );
 
  }

  const assingIdx = (idx) => {
    setIdProperty(idx);
  }
    
  return (
    <main>
      {productos == null && <Alert />}
      <section className='panel ms-5 me-5'>
     
        <section className='acciones'>
            <input type="search" 
            className="form-control" 
            placeholder="Search..." 
            aria-label="Search"
            onChange={handleSearchChange}
             />
          <button className='btn btn-dark'> Nuevo</button>
        </section>
        <table className='table table-bordered mt-3' >
          <thead>
            <tr>
              <th>Id</th>
              <th>Producto</th>
              <th>Tipo</th>
              <th>estado</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {
              Array.isArray(productos) ?
                (
                  productos !== null && productos !== undefined && productos.length > 0 ? (
                    productos.map(producto => (
                      <tr  key={producto.propertyId}>
                        <th scope="row">{producto.propertyId}</th>
                        <td >{producto.propertyName}</td>
                        <td>{producto.typeContract ? "Arriendo" : "Venta"}</td>
                        <td>{producto.state ? "disponible" : "no diponible"}</td>
                        <td>
                          <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="deleteModal" onClick={assingIdx(productos.propertyId)}>
                            Delete
                          </button>
                          <button>Modificar</button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td>
                        <Alert></Alert>
                      </td>
                    </tr>
                  )
                )
                :
                (
                  productos !== null && productos !== undefined && 
                  <tr>
                        <th scope="row">{productos.propertyId}</th>
                        <td>{productos.propertyName}</td>
                        <td>{productos.typeContract ? "Arriendo" : "Venta"}</td>
                        <td>{productos.state ? "disponible" : "no diponible"}</td>
                        <td>
                          <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="deleteModal" onClick={assingIdx(productos.propertyId)}>
                            Delete
                          </button>
                          <button>Modificar</button>
                        </td>
                  </tr>
                )
            }

          </tbody>
        </table>
        <Modal title="Delete product" body="Are you sure to delete this product?" target="delete" idx={idProperty}/>
      </section>
    </main>
    
  )
}
