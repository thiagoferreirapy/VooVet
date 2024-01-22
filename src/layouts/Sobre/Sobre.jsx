// Import style components
import { ContentSobre, ContentText, TitleSobre, TextSobre, ImgSobre } from "./style";

import imagemSobre from '../../images/SobreIMG/loja1.svg'




function Sobre (){
  
  return (
    <ContentSobre id="sobre">
        <ContentText>
            <TitleSobre>
                Sobre nós
            </TitleSobre>
            <TextSobre>
                Desde 2010, a VooVet tem se destacado como uma clínica veterinária dedicada ao cuidado de animais domésticos e silvestres. Nossa trajetória é marcada pelo compromisso inabalável com o bem-estar animal e pela oferta de serviços de saúde excepcionais. Ao longo dos anos, construímos relacionamentos sólidos com nossos clientes, baseados em comunicação aberta e transparência, proporcionando cuidados personalizados, desde exames de rotina até intervenções cirúrgicas avançadas e reabilitação.
            </TextSobre>

            <TextSobre>
                Na VooVet, nosso foco não se limita apenas aos animais domésticos; temos a honra de estender nossa expertise a animais silvestres, contribuindo para a preservação da biodiversidade. Acreditamos na inovação contínua e no aprendizado, buscando sempre as últimas tecnologias e abordagens médicas para garantir o melhor atendimento possível. Ao longo dessa jornada, cultivamos uma paixão duradoura pelo bem-estar animal e agradecemos pela confiança depositada em nossa equipe dedicada.
            </TextSobre>
        </ContentText>
        <ImgSobre src={imagemSobre}/>
    </ContentSobre>
  );
};


export default Sobre;