import React from 'react';
// import logo from '../../images/logo.svg';
import { DivContainer, ContentServices, ContentServicesCards, TitleServices, ImgLogo, ImgArrow, ContentTextBottom, TextParagraph, SpanText, ContentCards, Cards, AlertServices } from "./style";
import logo from '../../images/ServicesCardsIMG/Logo.svg'
import imgseta from '../../images/ServicesCardsIMG/ImgArrow.svg'

import cardsData from '../../services/TextinCards'

function ServicesCards() {

  return (
    <>
    <DivContainer id="services">
      <ContentServices>
        <TitleServices>Conheça os atendimentos que o seu pet pode ter.</TitleServices>
        <ContentTextBottom>
            <TextParagraph>
                A <SpanText>VOOVET</SpanText> é o Hospital Veterinários que oferece tratamento e carinho do melhor para o seu pet ficvar 100% e feliz!
            </TextParagraph>
            <ImgArrow
            src={imgseta}
            alt='Imagem de um seta para a direita'
            />
        </ContentTextBottom>
      </ContentServices>
      <ContentServicesCards>
        <ImgLogo
        src={logo}
        alt="Imagem da logo da VOOVET"
        />

        <ContentCards>
            {cardsData.map((card) => (
                <Cards key={card.id}>
                <p>{card.content}</p>
                </Cards>
            ))}
        </ContentCards>
      </ContentServicesCards>
    </DivContainer>
    <AlertServices>Dependendo do tratamento você pode optar pelo atendimento domiciliar ou hospitalar!</AlertServices>
    </>
  );
}

export default ServicesCards;
