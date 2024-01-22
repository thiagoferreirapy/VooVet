import { Link } from 'react-router-dom';
import { FaClock, FaPhone, FaWhatsapp, FaFacebook, FaSquareInstagram, FaLinkedin  } from "react-icons/fa6";

import { FooterMain, FooterContainer, ContentsFooter, ImgLogoFooter, ContatoFooter, Contato, Icon, TextFooter, ListLinksFooter, TextLinkFooter, ContentAtendimento, TitletAtendimento, TextAtendimento, ContainerIcons, IconSocial  } from './style';
import logo from '../../images/FooterIMG/logoFooter.svg';


function Footer(){
    return (
        <FooterMain>
            <FooterContainer>
                <ContentsFooter>
                    <ImgLogoFooter src={logo} alt='Logo da VOOVET' />
                    <ContatoFooter>
                        <Contato>
                            <Icon><FaPhone/></Icon>
                            <Link to={'/'}><TextFooter>(11) 94212-7658</TextFooter></Link>
                        </Contato>  
                        <Contato>
                            <Icon><FaWhatsapp/></Icon>
                            
                            <Link to={'/'}><TextFooter>(11) 94212-7658</TextFooter></Link>
                        </Contato>  
                    </ContatoFooter>
                    <ContatoFooter>
                        <TextFooter>Rua TALTAL, 195 - Alto da Lapa - Zona TAL - São Paulo</TextFooter>
                    </ContatoFooter>
                </ContentsFooter>

                <ContentsFooter>
                    <ListLinksFooter>
                        <Link to={'/'}><TextLinkFooter>Home</TextLinkFooter></Link>
                        <Link to={'/'}><TextLinkFooter>Sobre</TextLinkFooter></Link>
                        <Link to={'/'}><TextLinkFooter>Exames</TextLinkFooter></Link>
                        <Link to={'/'}><TextLinkFooter>Agendamento</TextLinkFooter></Link>
                        <Link to={'/'}><TextLinkFooter>Contato</TextLinkFooter></Link>
                        <Link to={'/'}><TextLinkFooter>Localização</TextLinkFooter></Link>
                        <Link to={'/'}><TextLinkFooter>Politicas de Privacidade</TextLinkFooter></Link>
                        <Link to={'/'}><TextLinkFooter>Politicas de Cooquies</TextLinkFooter></Link>
                    </ListLinksFooter>
                </ContentsFooter>

                <ContentsFooter>
                    <ContentAtendimento>
                        <TitletAtendimento>HORÁRIO DE ATENDIMENTO</TitletAtendimento>
                        <TextAtendimento>Segunda à sexta das 06:00 às 22:00</TextAtendimento>
                        <TextAtendimento>Sábado das 08:00 às 21:00</TextAtendimento>
                        <TitletAtendimento>ATENDIMENTO EMERGÊNCIAL 24h</TitletAtendimento>
                        <ContainerIcons>
                            <Link to={'/'}>
                                <IconSocial>
                                    <FaFacebook/>
                                </IconSocial>
                            </Link>
                            <Link to={'/'}>
                                <IconSocial>
                                    <FaSquareInstagram/>
                                </IconSocial>
                            </Link>
                            
                        </ContainerIcons>
                    </ContentAtendimento>
                </ContentsFooter>
            </FooterContainer>
        </FooterMain>
    )
}


export default Footer