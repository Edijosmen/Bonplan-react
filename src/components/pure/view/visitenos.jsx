import React from 'react'
import {GoLocation} from 'react-icons/go'
import {TbLocationFilled,TbPhoneCall} from 'react-icons/tb'
import {TfiTime} from 'react-icons/tfi'
import {GrMapLocation} from 'react-icons/gr'
export default function Visitenos() {
    return (
        <div className='container'>
            <section>
                <GrMapLocation className='gr-icon'></GrMapLocation>
                <h3>Puntos de Atención al Cliente</h3>
                <p>Conozca su sucursal más cercana para ofrecerle servicio respaldo, transparencia y comercializar ágilmente su propiedad.</p>
                <hr></hr>
            </section>
            <section className=''>
                <div className='location'>
                    <div className='conte'>
                        <span className='vi-title'>Parque Central Bavaria</span>
                        <br />
                        <div className="float-row pt-3">
                            <TbLocationFilled className='tb-icon'></TbLocationFilled>
                            <p>Carrera 13 No. 00  00. Piso 0</p>
                        </div>
                        <div className="float-row">
                            <TbPhoneCall className='tb-icon'></TbPhoneCall>
                            <p>(+571) 000 0000</p>
                        </div>
                        <div className="float-colm">
                            <div>
                                <TfiTime className='tb-icon'></TfiTime>
                                <strong>Horarios de Atención</strong>
                            </div>
                            <div>
                                <p>Lunes-Viernes</p>
                                <p>8:00 a.m a 6:00 p.m</p>
                            </div>

                        </div>
                    </div>
                    <div className='conte'>
                        <span className='vi-title'>Centro Empresarial</span>
                        <br />
                        <div className="float-row pt-3">
                            <TbLocationFilled className='tb-icon'></TbLocationFilled>
                            <p>Carrera 78 No. 00 55 Local 000</p>
                        </div>
                        <div className="float-row">
                            <TbPhoneCall className='tb-icon'></TbPhoneCall>
                            <p>(+571) 000 0000</p>
                        </div>
                        <div className="float-colm">
                            <div>
                                <TfiTime className='tb-icon'></TfiTime>
                                <strong>Horarios de Atención</strong>
                            </div>
                            <div>
                                <p>Lunes a Jueves</p>
                                <p>8:00 a.m a 6:00 p.m</p>
                            </div>
                            <div>
                                <p>Viernes</p>
                                <p>8:30 a.m a 5:30 p.m</p>
                            </div>
                        </div>
                    </div>
                    <div className='conte'>
                        <span className='vi-title'>Diver Plaza</span>
                        <br />
                        <div className="float-row pt-3">
                            <TbLocationFilled className='tb-icon'></TbLocationFilled>
                            <p>Carrera 78 No. 00 55 Local 000</p>
                        </div>
                        <div className="float-row">
                            <TbPhoneCall className='tb-icon'></TbPhoneCall>
                            <p>(+571) 000 0000</p>
                        </div>
                        <div className="float-colm">
                            <div>
                                <TfiTime className='tb-icon'></TfiTime>
                                <strong>Horarios de Atención</strong>
                            </div>
                            <div>
                                <p>Lunes a Jueves</p>
                                <p>8:00 a.m a 6:00 p.m</p>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
