import React from 'react'
import { Formik, Field, Form } from 'formik';
import './module.somos.css'
export default function Contacto() {
  return (
      <div className='container-flued'>
          <section className='wiew-contacto'>
              <img className='cont-img' src='img/bogota2.jpg' />

              <div className='flex-colm'>
                  <div className='date'>
                        <strong>Contacto</strong>
                        <p>Calle 99 No 14- 49 local 2. Sucursal - Bogotá D.C.</p>
                        <p> (+571) 646 2347 - 314 359 3612</p>
                        <p> bonplanmobiliaria@mobiliaria.com.co</p>
                      <p>Déjanos tus datos y pronto nos pondremos en contacto.</p>
                  </div>
                  <div className='form-contacto'>
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
                          {({ values, handleSubmit, handleChange }) => (
                              <Form className='contacto-form'  >
                                  <div className='mb-3'>
                                      <label className='form-label ps-2' htmlFor="nameCompleto">Nombre Completo</label>
                                      <Field className="form-control" id="nameCompleto" name="nameCompleto" />
                                  </div>

                                  <div className='mb-3 '>
                                      <label className='form-label ps-2' htmlFor="email">Correo</label>
                                      <Field className='form-control' id="email" name="email" />
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
                                          value={values.msj} />
                                  </div>

                                  <div className='submit'>
                                      <button className='btn btn-dark mt-3 ' type="submit">Enviar</button>
                                  </div>

                              </Form>
                          )}
                      </Formik>
                  </div>
              </div>
          </section>
      </div>
  )
}
