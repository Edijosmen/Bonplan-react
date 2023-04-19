import React, { useEffect,useState } from 'react'
import Select from 'react-select';
import { Field,Form, Formik,ErrorMessage } from 'formik';
import httpClient from '../../../../services/HttpClient';
import ImgsForm from './imgsForm';
import {MdAddCircle,MdRemoveCircle} from 'react-icons/md';
import { useParams } from 'react-router-dom';




export default function UpdProducto() {
    let { propertyId } = useParams();
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([]);
    const[show,setShow] = useState(false);
    const [property, setProperty] = useState({
        description: '',
        prece: '',
        typeContract: '',
        state: 1,
        dimencion: '',
        typPropertyId: '',
        mcip_Id: 0,
        dpart_Id: 0,
        localidad: '',
        nHabitacion: '',
        nBanio: '',
        caracteristicas:''
    });
    const[showInsert,setShowInsert] = useState(true);
    const [ID_PROPERTY, setIdProperty] = useState();
    const initialValues = {
        description:property.description,
        prece: '',
        typeContract: '',
        state: 1,
        dimencion: '',
        typPropertyId: '',
        mcip_Id: 0,
        dpart_Id: 0,
        localidad: '',
        nHabitacion: '',
        nBanio: '',
        caracteristicas:''
       
    };

      const optionsDepart = [];
      const optionsMunicip = [];
    
    useEffect(() => {
      
    httpClient.get(`Property/GetById?propertyId=${propertyId}`)
                .then(response => {                   
                    setIdProperty({... response.data.data});
                   console.log("response",response.data.data);
                   setProperty(prevProperty => ({
                    ...prevProperty,
                    description: response.data.data.description,
                    caracteristicas: response.data.data.caracteristicas,
                    prece: response.data.data.prece,
                    typeContract: response.data.data.typeContract,
                    state: response.data.data.state,
                    dimencion: response.data.data.dimencion,
                    typPropertyId: response.data.data.propertyName,
                    mcip_Id: response.data.data.mcip_Name,
                    dpart_Id: response.data.data.dpart_Name,
                    localidad: response.data.data.localidad,
                    nHabitacion: response.data.data.nHabitacion,
                    nBanio: response.data.data.nBanio
                  }));
                })
                .catch(error => {
                    console.error("error",error);
                });
        
    }, [])
    
    // Función para manejar el cambio en el input
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    // Función para manejar el clic en el botón "Add"
    const handleAddClick = () => {
        // Agregar el valor del input al array de items
        setItems([...items, inputValue]);
        // Limpiar el valor del input
        setInputValue('');
    };

    const handleDeleteClick = (index) => {
        // Crea una copia del array de items
        const updatedItems = [...items];
        // Remueve el elemento del array usando el índice proporcionado
        updatedItems.splice(index, 1);
        // Actualiza el estado con el nuevo array sin el elemento eliminado
        setItems(updatedItems);
      };


    const handleSubmit = (values, { setSubmitting }) => {
        // Lógica para manejar la presentación de los datos del formulario
        values.caracteristicas=items.toString();
        values.typeContract = parseInt(values.typeContract);
        values.typPropertyId = parseInt(values.typPropertyId);
        values.nBanio = parseInt(values.nBanio);
        values.nHabitacion = parseInt(values.nHabitacion);
        httpClient.post("Property/Insert",values)
                    .then(response => {
                        setIdProperty(response.data.data);
                        console.log(response);
                    })
                    .catch(error => {
                        console.log(error);
                    });
        
        setShow(true);
        setShowInsert(false);
    };
    const handleSelectChange = (selectedOption, { setFieldValue }) => {
        // Función para manejar el cambio de selección en el select
        setFieldValue('dpart_Id', selectedOption.value); // Actualiza el valor en el estado de Formik

        httpClient.get(`Municipio/GetMunicipioByDepart?dpertId=${selectedOption.value}`)
            .then(response => {
                optionsMunicip.length = 0;
                response.data.data.map((item) => {
                    // Crea un nuevo objeto con las propiedades que necesitas
                    const option = {
                        value: item.mcip_Id,
                        label: item.mcip_Name.trim() // Puedes usar 'trim()' para eliminar espacios en blanco al principio y al final de la cadena
                    };

                    // Agrega el nuevo objeto al arreglo 'options'
                    optionsMunicip.push(option);
                });
            })
            .catch(error => {
                console.error(error);
            });
    };
    const handleSelectChangeMucip = (selectedOption, { setFieldValue }) => {
        setFieldValue('mcip_Id', selectedOption.value);
    }
    console.log("initialvalues",initialValues);
    console.log(property);
  return (
      <main>
          {showInsert &&
            <section>
              <Formik
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
              >
                  {({ isSubmitting, values, setFieldValue }) => (

                      <Form className='form-producto'>
                        
                          <label htmlFor="description">Descripción</label>
                          <Field as="textarea" name="description" value={property.description} id="description" />
                          <ErrorMessage name="description" component="div" />

                          <section className='fl'>
                              <div className='medida clm' >
                                  <label htmlFor="description">Medida o Area</label>
                                  <Field type="text" name="dimencion" value={property.dimencion} id="dimencion" />
                                  <ErrorMessage name="dimencion" component="div" />
                              </div>

                              <div className='contrato clm'>
                                  <label htmlFor="description">Tipo de contrato</label>
                                  <Field as="select" name="typeContract" id="type">
                                        {property.typeContract===0 ?  <option value="0">Arriendo</option>:<option value="1">Venta</option>}                                  
                                     
                                     
                                  </Field>
                              </div>
                              <div className='propiedad clm'>
                                  <label htmlFor="description">Tipo de Propiedad</label>
                                  <Field as="select" name="typPropertyId" id="type">
                                      
                                      <option value="1">Casa</option>
                                     
                                  </Field>
                              </div>
                          </section>
                          <section className='ubicacion fl'>
                              <div className='depart clm'>
                                  <label htmlFor="description">Departamento</label>
                                  <Select
                                      id="selecDepart"
                                      name="selecDepart"
                                      options={optionsDepart}
                                      value={values.dpart_Id.label} // Valor seleccionado del estado de Formik
                                      
                                  />
                              </div>
                              <div className='muncp clm'>
                                  <label htmlFor="Municipio">Municipio</label>
                                  <Select
                                      id="selectMcip"
                                      name="selectMcip"
                                      options={optionsMunicip}
                                      value={values.mcip_Id.label} // Valor seleccionado del estado de Formik
                                      
                                  />
                              </div>
                          </section> 
                          <label htmlFor="localidad">Localidad</label>
                            <Field type="text" name="localidad" id="localidad"></Field>
                          
                          <section className='fl'>
                              <div className='habitaciones clm'>
                                  <label htmlFor="habitaciones">N° Habitaciones</label>
                                  <div role="group" aria-labelledby="my-radio-group">
                                      <label className="pe-2">
                                          <Field  type="radio" name="nHabitacion" value="1" />
                                          1
                                      </label>
                                      <label className="pe-2">
                                          <Field type="radio" name="nHabitacion" value="2" />
                                          2
                                      </label>
                                      <label className="pe-2">
                                          <Field type="radio" name="nHabitacion" value="3" />
                                          3
                                      </label>
                                      <label className="pe-2">
                                          <Field type="radio" name="nHabitacion" value="4" />
                                          4
                                      </label>
                                      <label className="pe-2">
                                          <Field type="radio" name="nHabitacion" value="5" />
                                          5
                                      </label>
                                      <label className="pe-2">
                                          <Field type="radio" name="nHabitacion" value="6" />
                                          5+
                                      </label>
                                      <div>Picked: {values.nHabitacion}</div>
                                  </div>
                              </div>
                              <div className='banios cml'>
                                  <label htmlFor="banios">N° Baños</label>
                                  <div role="group" aria-labelledby="my-radio-group">
                                      <label className="pe-2">
                                          <Field type="radio" name="nBanio" value="1" />
                                          1
                                      </label>
                                      <label className="pe-2">
                                          <Field type="radio" name="nBanio" value="2" />
                                          2
                                      </label>
                                      <label className="pe-2">
                                          <Field type="radio" name="nBanio" value="3" />
                                          3
                                      </label>
                                      <label className="pe-2">
                                          <Field type="radio" name="nBanio" value="4" />
                                          4
                                      </label>
                                      <label className="pe-2">
                                          <Field type="radio" name="nBanio" value="5" />
                                          5
                                      </label>
                                      <label className="pe-2">
                                          <Field type="radio" name="nBanio" value="6" />
                                          5+
                                      </label>
                                      <div>Picked: {values.nBanio}</div>
                                  </div>
                              </div>
                          </section>
                          <section>
                              <div className='fl'>
                                  <div className='wth-100'>
                                      <input className='me-2' type="text" value={inputValue} onChange={handleInputChange} />
                                      <button type='button' onClick={handleAddClick}>Add</button>
                                      <ul>
                                          {items.map((item, index) => (
                                              <li key={index}>{item} <MdRemoveCircle onClick={()=>handleDeleteClick(index)}></MdRemoveCircle></li>
                                          ))}
                                      </ul>
                                  </div>

                                  <div className='wth-100'>
                                      <label className='pe-2' htmlFor="precio">Precio</label>
                                      <Field type="text" name="prece" ></Field>
                                  </div>
                              </div>
                          </section>
                          <button type="submit" disabled={isSubmitting}>Enviar</button>
                      </Form>
                  )}
              </Formik>

          </section>
          }
      </main>
  )
}
