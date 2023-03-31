import React from 'react'
import './styles/module.footer.css'
import {GoLocation} from 'react-icons/go'
import {AiFillFacebook,AiFillInstagram,AiFillLinkedin} from 'react-icons/ai'
function Footer() {
    return (
        <div className="container-flued">
            <footer className="footer">
                <div className='ubic'>
                    <div className='location'>
                        <div>
                            <GoLocation className='icon-go'></GoLocation>
                        </div>
                        <div className='flex-col align-items-start'>

                            <strong>Parque Central Bavaria</strong>
                            <span>Carrera 13 No. 28  01. Piso 2</span>
                            <span>(601) 000 000</span>

                        </div>
                    </div>
                    <div className='pt-3'>
                        <h3 className='Copyright'>Siguenos ...</h3>
                        <AiFillFacebook className='icon-ai'></AiFillFacebook>
                        <AiFillInstagram className='icon-ai'></AiFillInstagram>
                        <AiFillLinkedin className='icon-ai'></AiFillLinkedin>
                    </div>
                </div>
                <br className='brr' />
                <hr></hr>
                <p className="text-center  mb-0 pb-3 Copyright">&copy; Copyright © 2023 Bonplan Bogotá | Todos los derechos reservados </p>
            </footer>
        </div>
            
       
    )}

export default Footer
