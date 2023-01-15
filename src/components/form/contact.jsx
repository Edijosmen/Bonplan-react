import React from 'react'
import { Formik, Field, Form } from 'formik';
import './styles/styles.modules.form.css'
export default function Contact() {

  return (
      <div>
          <div className='contacto'>
              <h1>Contacto</h1>
                <hr></hr>
              <Formik
                  initialValues={{
                      nameCompleto: '',
                      email: '',
                      cell: '',
                      msj: '',
                  }}
                  onSubmit={async (values) => {
                     
                      alert(JSON.stringify(values, null, 2));
                  }}
              >
                 {({values,handleSubmit,handleChange})=>(
                    <Form className='contacto-form'  >
                      <div className='mb-3'>
                      <label className='form-label ps-2' htmlFor="nameCompleto">Nombre Completo</label>
                      <Field className="form-control" id="nameCompleto" name="nameCompleto"  />
                      </div>

                      <div className='mb-3 '>
                      <label className='form-label ps-2' htmlFor="email">Correo</label>
                      <Field className ='form-control' id="email" name="email"  />
                      </div>

                      <div className='mb-3'>
                      <label className='form-label ps-2' htmlFor="cell">Telefono</label>
                      <Field className='form-control' id="cell" name="cell" />
                      </div>

                      <div className='mb-3'>
                      <label className='form-label ps-2' htmlFor="msj">Dejenos un Mensaje!</label>
                      <textarea 
                            className='form-control pb-5'
                             id="email" 
                            name="msj"
                            onChange={handleChange} 
                            value={values.msj}/>
                      </div>
                     
                     <div className='submit'>
                     <button  className='btn btn-dark mt-3 ' type="submit">Submit</button>
                     </div>
                    
                  </Form>
                 )}
              </Formik>
          </div>
      </div>
  )
}
