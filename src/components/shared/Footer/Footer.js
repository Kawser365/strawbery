import React from 'react';
import img from '../../Images/Footer/ann&wim_aarbeiden.png'
import './Footer.css'
import { FontAwesomeIcon, } from '@fortawesome/react-fontawesome';
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
const Footer = () => {
    return (
        <>
        <div className='footer-main'>
        <div>
        <img src={img}  id='image' alt=""/>
        </div>
        </div>
        <div className='footer'>
                    <div className='row text-white'>
                        <div className='col-lg-3 col-md-3 col-6'>
                            <h1 className='footer-title'>Pluk de dag!</h1>
                        </div>
                        <div className='col-lg-3 col-md-3 col-6 footer-text'>
                            <p>T 050 41 45 59 </p>
                            <p>Wim 0496 52 58 58</p>
                            <p>Ann 0496 52 61 61</p>
                        </div>
                        <div className='col-lg-3 col-md-3 col-6 footer-text'>
                            <p>Steenoverstraat 8-10</p>
                            <p>8370 Blankenberge</p>
                            <a href="mailto:Info@wimtanghe.be" style={{position:'relative', zIndex:'10'}} className='text-white'>Info@wimtanghe.be</a>
                        </div>
                        <div className='col-lg-3 col-md-3 col-6' style={{marginTop:'30px', color:'#fff'}}>
                           <a href="https://www.instagram.com/fruitannenwim/" style={{position:'relative', zIndex:'10', textDecoration:'none'}} target='_blank'>
                           <FontAwesomeIcon icon={faInstagram} style={{height:'40px', width:'40px',color:'#fff'}}></FontAwesomeIcon>
                           </a>
                            <a href="https://www.facebook.com/Wim-Tanghe-groenten-fruit-132211263566363/" style={{position:'relative', zIndex:'10', textDecoration:'none'}} target='_blank'>
                            <FontAwesomeIcon icon={faFacebookF} style={{height:'40px', width:'40px',color:'#fff'}}></FontAwesomeIcon>
                            </a>
                        </div>
                </div>
        </div>
        <div className='copyright d-flex justify-content-center'>
        <p>Copyright Groothandel Tanghe 2022 - <span className='copyright-span'>webdesign by <a href="https://wlampaert.com" className='copyright-span' target='_blank' style={{position:'relative', zIndex:'10', textDecoration:'none'}} >wlampaert</a></span></p>
       </div>
        </>
    );
};

export default Footer;