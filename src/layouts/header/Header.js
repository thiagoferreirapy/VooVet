import { Link } from 'react-router-dom';
import { Link as Scroll } from 'react-scroll';
import { FaClock, FaPhone, FaWhatsapp, FaFacebook, FaSquareInstagram, FaLinkedin  } from "react-icons/fa6";

import style from '../../styles/header/Header.module.css';
import logo from '../../images/logo.svg';


function Header(){
    return (
        <header className={style.header}>
            <div className={style.header_container}>
                <div className={style.content}>
                    <div className={style.content_logo}>
                        <Link to='/'>
                            <img src={logo} alt='Logo'/>
                        </Link>
                    </div>

                    <div className={style.content_atendimentomsg}>
                        <FaClock className={style.icon_header}/>
                        <div className={style.atendimentotimer}>
                        <h3>Atendimento</h3>
                        <p>Segunda à Sexta</p>
                        <p>Das 06:00 às 22:00 horas</p>

                        </div>

                    </div>

                    <div className={style.content_faleconosco}>
                        <h3>Fale conosco</h3>
                        
                        <div className={style.contact}>
                            <FaPhone className={style.icon_header}/>
                            <p>(11) 94212-7658</p>
                        

                        </div>
                        <div className={style.contact}>
                            <FaWhatsapp className={style.icon_header}/>
                            <p>(11) 94212-7658</p>
                        

                        </div>

                    </div>

                    <button className={style.button_agendamento}>Faça o seu agendamento</button>
                </div>
                <div className={style.container_menubar}>
                    <div className={style.content_menubar}>
                        <div> 
                            <Link to={'/'} className={style.link_menubar}>Home</Link>
                            <Scroll to="sobre" smooth={true} duration={100} className={style.link_menubar}>Sobre</Scroll>
                            <Scroll to="agendamento" smooth={true} duration={100} className={style.link_menubar}>Agendamento</Scroll>
                            <Scroll to="services" smooth={true} duration={100} className={style.link_menubar}>Serviços</Scroll>
                            <Scroll to="" smooth={true} duration={100} className={style.link_menubar}>Trabalhe conosco</Scroll>
                        </div>
                        <div className={style.content_redes_sociais}>
                        <FaSquareInstagram className={style.icons_menubar}/>
                        <FaFacebook className={style.icons_menubar}/>
                        <FaLinkedin className={style.icons_menubar}/>
                        </div>  
                    </div>
                </div>
          
            </div>
        </header>
    )
}


export default Header