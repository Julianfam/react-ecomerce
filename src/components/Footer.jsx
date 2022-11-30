import React from 'react';
import '../styles/Footer.scss';
import facebook from '../assets/icons/Social Media/003-facebook-1.png';
import email from '../assets/icons/Social Media/010-gmail.png';
import whatsapp from '../assets/icons/Social Media/006-whatsapp.png';



const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">Julian Andrade React Store On Production <i>CODE WANTS TO BE SIMPLE</i></p>
          </div> 

          <div className="col-xs-6 col-md-3">
            <h6>Categories</h6>
            <ul className="footer-links">
              <li><a href="">Todos</a></li>
              <li><a href="">Diademas Gamer</a></li>
              <li><a href="">Otros</a></li>
              <li><a href="">Contacto</a></li>
              <li><a href="">Soporte</a></li>
              <li><a href="">Terminos y Condiciones</a></li>

            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="">Sobre nosotros</a></li>
              <li><a href="">Guias de Usuario</a></li>
              <li><a href="">Sistema de Vendedores</a></li>
              <li><a href="">Politicas de privacidad</a></li>
              
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
          
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href={facebook}><img src={facebook} alt="faceboookiicon" /><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter email" href={email}><img src={email} alt="emailicon" /><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble whatsaap" href={whatsapp}><img src={whatsapp}alt="whatsappicon" /><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin test" href={facebook}><img src={facebook} alt="FacebookIcon" /><i className="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
          
          
        </div>
      </div>
      <p className="copyright-text">Copyright  2022 Todos los Derechos reservados  
         <a href="#">   @Julian Andrade</a>.
            </p>
</footer>
  )
}

export default Footer