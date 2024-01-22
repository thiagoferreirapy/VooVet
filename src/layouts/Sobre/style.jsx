import styled from 'styled-components';
import {breakPoints, size, getTamanhoDaTela} from '../../styles/breakpoints';

console.log(getTamanhoDaTela().largura)
console.log(getTamanhoDaTela().altura)

  

export const ContentSobre = styled.div`
    margin-top: 100px;
    max-width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    padding: 50px;


    /* celulares */
    @media ${breakPoints.mm}{
        min-width: ${size.mm};
        width: ${getTamanhoDaTela().largura}px;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
    

    @media ${breakPoints.md}{
        min-width: ${size.md};
        width: ${getTamanhoDaTela().largura}px;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    @media ${breakPoints.mg}{
        min-width: ${size.mg};
        width: ${getTamanhoDaTela().largura}px;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    /* tablets */
    @media ${breakPoints.tbm}{
        min-width: ${size.tbm};
        width: ${getTamanhoDaTela().largura}px;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    @media ${breakPoints.tbmd}{
        min-width: ${size.tbm};
        width: ${getTamanhoDaTela().largura}px;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    @media ${breakPoints.tbg}{
        min-width: ${size.tbg};
        width: ${getTamanhoDaTela().largura}px;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    /* notebooks */
    @media ${breakPoints.bg}{
        min-width: ${size.tbg};
        width: ${getTamanhoDaTela().largura}px;
        flex-direction: row;
        justify-content: center;
    
    }

    @media ${breakPoints.mw}{
        background-color: #ff5100;
        min-width: ${size.mw};
        width: ${getTamanhoDaTela().largura}px;
        flex-direction: row;
        justify-content: center;
    
    }

    @media ${breakPoints.mdw}{
        min-width: ${size.mdw};
        width: ${getTamanhoDaTela().largura}px;
        flex-direction: row;
        justify-content: center;
    
    }
    @media ${breakPoints.uw}{
        min-width: ${size.uw};
        width: ${getTamanhoDaTela().largura}px;
        flex-direction: row;
        justify-content: center;
    
    }


    

`;


export const ContentText = styled.div`
    width: 600px;
    margin-right: 50px;

    /* celular */
    @media ${breakPoints.mm}{
        width: ${size.mm};
        text-align: center;
        padding: 0 15px;
        margin-right: 0;
    }

    @media ${breakPoints.md}{
        width: ${size.md};
        text-align: center;
        padding: 0 10px;
        margin-right: 0;
    }
    @media ${breakPoints.mg}{
        width: ${size.mg};
        text-align: center;
        padding: 0 10px;
        margin-right: 0;
    }

    /* tablet */
    @media ${breakPoints.tbm}{
        width: ${size.tbm};
        text-align: left;
        padding: 0 15px;
        margin-right: 0;
    }

    @media ${breakPoints.tbmd}{
        width: ${size.tbmd};
        text-align: left;
        padding: 0 30px;
        margin-right: 0;
    }



    /* notebooks */
    @media ${breakPoints.bg}{
        width: 600px;
        text-align: left;
        padding: 0 30px;
        margin-right: 0;
    }











`;
export const TitleSobre = styled.h2`
    font-size: 30px;
    font-weight: 600;
    color: #0E2F56;
    margin-bottom: 20px;
`;
export const TextSobre = styled.p`
    font-size: 16px;
    font-weight: 500;
    color: #333;
    margin-bottom: 50px;
    text-align: justify;
`;






export const ImgSobre = styled.img`
    width: 600px;

    /* celular */
    @media ${breakPoints.mm}{
        width: ${size.mm};
        padding: 0 15px;
        margin-right: 0;
    }

    @media ${breakPoints.md}{
        width: ${size.md};
        padding: 0 15px;
        margin-right: 0;
    }

    @media ${breakPoints.mg}{
        width: ${size.mg};
        padding: 0 15px;
        margin-right: 0;
    }


    /* tablet */
    @media ${breakPoints.tbm}{
        width: ${size.tbm};
        padding: 0 15px;
        margin-right: 0;
    }

    @media ${breakPoints.tbmd}{
        width: ${size.tbmd};
        padding: 0 30px;
        margin-right: 0;
    }


    /* notebooks */
    @media ${breakPoints.bg}{
        width: 400px;
        height: 550px;
        object-fit: cover;
        padding: 0 30px;
        margin-right: 0;
    }

    @media ${breakPoints.mw}{
        width: 500px;
        height: 550px;
        object-fit: cover;
        padding: 0 30px;
        margin-right: 0;
    }
    @media ${breakPoints.mdw}{
        width: 600px;
        height: 500px;
        object-fit: cover;
        padding: 0 30px;
        margin-right: 0;
    }
`;

