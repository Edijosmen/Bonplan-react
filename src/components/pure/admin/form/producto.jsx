import React, { useEffect,useState } from 'react'
import Select from 'react-select';
import { Field,Form, Formik,ErrorMessage } from 'formik';
import httpClient from '../../../../services/HttpClient';
import ImgsForm from './imgsForm';
import {MdAddCircle,MdRemoveCircle} from 'react-icons/md';




export default function Producto() {
    const [inputValue, setInputValue] = useState('');
    const [items, setItems] = useState([]);
    const[show,setShow] = useState(false);
    const[showInsert,setShowInsert] = useState(true);
    const [ID_PROPERTY, setIdProperty] = useState();
    const initialValues = {
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
       
    };
      const optionsDepart = [];
      const optionsMunicip = [];
    
    useEffect(() => {
        if (optionsDepart.length === 0) {
            httpClient.get("Departamento")
                .then(response => {                   
                    optionsDepart.length = 0;
                    response.data.data.map((item) => {
                        const option = {
                            value: item.dpart_Id,
                            label: item.dpart_Name.trim()
                        };
                        optionsDepart.push(option);
                    });
                })
                .catch(error => {
                    console.error(error);
                });
        }
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
    console.log(ID_PROPERTY);
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
                          <Field as="textarea" name="description" id="description" />
                          <ErrorMessage name="description" component="div" />

                          <section className='fl'>
                              <div className='medida clm' >
                                  <label htmlFor="description">Medida o Area</label>
                                  <Field type="text" name="dimencion" id="dimencion" />
                                  <ErrorMessage name="dimencion" component="div" />
                              </div>

                              <div className='contrato clm'>
                                  <label htmlFor="description">Tipo de contrato</label>
                                  <Field as="select" name="typeContract" id="type">
                                      <option defaultValue>Selecionar...</option>

                                      <option value="1">Venta</option>
                                      <option value="0">Arriendo</option>  

                                  </Field>
                              </div>
                              <div className='propiedad clm'>
                                  <label htmlFor="description">Tipo de Propiedad</label>
                                  <Field as="select" name="typPropertyId" id="type">
                                      <option defaultValue>Selecionar...</option>
                                      <option value="1">Casa</option>
                                      <option value="2">Apartamento</option>
                                      <option value="3">local</option>
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
                                      onChange={(dpart_Id) => handleSelectChange(dpart_Id, { setFieldValue })}
                                  />
                              </div>
                              <div className='muncp clm'>
                                  <label htmlFor="Municipio">Municipio</label>
                                  <Select
                                      id="selectMcip"
                                      name="selectMcip"
                                      options={optionsMunicip}
                                      value={values.mcip_Id.label} // Valor seleccionado del estado de Formik
                                      onChange={(mcip_Id) => handleSelectChangeMucip(mcip_Id, { setFieldValue })}
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
          {show && 
            <section>

            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold">Insert images here</h1>
                <div className="col-lg-6 mx-auto">
                <div className="d-grid gap-2 d-sm-flex justify-content-center">


                    <ImgsForm idx={ID_PROPERTY}/>
                    {console.log(ID_PROPERTY)}
                </div>
                </div>
            </div>
          </section>
          }
      </main>
  )
}
