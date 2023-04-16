import React, { useEffect } from 'react'
import Select from 'react-select';
import { Field,Form, Formik,ErrorMessage } from 'formik';
import httpClient from '../../../../services/HttpClient';
import ImgsForm from './imgsForm';

const ID_PROPERTY = "9339ed6a-74f6-4a78-a7c9-83521bf3e280";

export default function Producto() {
    const initialValues = {
        description: '',
        prece: '',
        typeContract: 0,
        state: 0,
        dimencion: '',
        typPropertyId: 0,
        mcip_Id: 0,
        dpart_Id: 0,
        localidad: '',
        nHabitacion: 0,
        nBanio: 0,
        caracteristicas: '',
        picked:''
       
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
     
    const handleSubmit = (values, { setSubmitting }) => {
        // Lógica para manejar la presentación de los datos del formulario
        setSubmitting(false);
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

  return (
      <main>
          <section>
              <Formik
                  initialValues={initialValues}
                  onSubmit={handleSubmit}
              >
                  {({ isSubmitting, values, setFieldValue }) => (

                      <Form>
                          {console.log(values)}
                          <label htmlFor="description">Descripción</label>
                          <Field type="text" name="description" id="description" />
                          <ErrorMessage name="description" component="div" />

                          <label htmlFor="description">Medida o Area</label>
                          <Field type="text" name="medida" id="dimencion" />
                          <ErrorMessage name="dimencion" component="div" />

                          <label htmlFor="description">Tipo de contrato</label>
                          <Field as="select" name="type" id="type">
                              <option defaultValue>Selecionar...</option>
                              <option value="option2">Venta</option>
                              <option value="option3">Arriendo</option>
                          </Field>
                          <label htmlFor="description">Tipo de Propiedad</label>
                          <Field as="select" name="type" id="type">
                              <option defaultValue>Selecionar...</option>
                              <option value="option2">Casa</option>
                              <option value="option3">Apartamento</option>
                              <option value="option3">local</option>
                          </Field>
                          <label htmlFor="description">Departamento</label>
                          <Select
                              id="selecDepart"
                              name="selecDepart"
                              options={optionsDepart}
                              value={values.dpart_Id.label} // Valor seleccionado del estado de Formik
                              onChange={(dpart_Id) => handleSelectChange(dpart_Id, { setFieldValue })}
                          />
                          {console.log("depaet", optionsDepart)}
                          <label htmlFor="Municipio">Municipio</label>
                          <Select
                              id="selectMcip"
                              name="selectMcip"
                              options={optionsMunicip}
                              value={values.mcip_Id.label} // Valor seleccionado del estado de Formik
                              onChange={(mcip_Id) => handleSelectChangeMucip(mcip_Id, { setFieldValue })}
                          />
                          <label htmlFor="localidad">Localidad</label>
                            <Field type="text" name="localidad" id="localidad"></Field>
                          <button type="submit" disabled={isSubmitting}>Enviar</button>
                          <div role="group" aria-labelledby="my-radio-group">
                              <label>
                                  <Field type="radio" name="picked" value="One" />
                                  One
                              </label>
                              <label>
                                  <Field type="radio" name="picked" value="Two" />
                                  Two
                              </label>
                              <div>Picked: {values.picked}</div>
                          </div>
                      </Form>
                  )}
              </Formik>

          </section>
          <section>
            <div class="px-4 py-5 my-5 text-center">
                <h1 class="display-5 fw-bold">Insert images here</h1>
                <div class="col-lg-6 mx-auto">
                <div class="d-grid gap-2 d-sm-flex justify-content-center">
                    <ImgsForm idx={ID_PROPERTY}/>
                </div>
                </div>
            </div>
          </section>
      </main>
  )
}
