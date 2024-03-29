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
        /* background-color: red; */
        min-width: ${size.mm};
        width: ${getTamanhoDaTela().largura}px;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }
    

    @media ${breakPoints.md}{
        /* background-color: blue; */
        min-width: ${size.md};
        width: ${getTamanhoDaTela().largura}px;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    @media ${breakPoints.mqg}{
        /* background-color: #fff200; */
        min-width: ${size.mqg};
        width: ${getTamanhoDaTela().largura}px;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    @media ${breakPoints.mg}{
        /* background-color: #ff00f7; */
        min-width: ${size.mg};
        width: ${getTamanhoDaTela().largura}px;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    /* tablets */
    @media ${breakPoints.tbm}{
        /* background-color: #00ff95; */
        min-width: ${size.tbm};
        width: ${getTamanhoDaTela().largura}px;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    @media ${breakPoints.tbmd}{
        /* background-color: #26ff00; */
        min-width: ${size.tbm};
        width: ${getTamanhoDaTela().largura}px;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    @media ${breakPoints.tbg}{
        /* background-color: #ffff00; */
        min-width: ${size.tbg};
        width: ${getTamanhoDaTela().largura}px;
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    /* notebooks */
    @media ${breakPoints.bg}{
        /* background-color: #ffa200; */
        min-width: ${size.tbg};
        width: ${getTamanhoDaTela().largura}px;
        flex-direction: row;
        justify-content: center;
    
    }

    @media ${breakPoints.mw}{
        /* background-color: #ff5100; */
        min-width: ${size.mw};
        width: ${getTamanhoDaTela().largura}px;
        flex-direction: row;
        justify-content: space-around;
    
    }

    @media ${breakPoints.mdw}{
        /* background-color: #ff2929; */
        min-width: ${size.mdw};
        width: ${getTamanhoDaTela().largura}px;
        flex-direction: row;
        justify-content: space-around;
    
    }
    @media ${breakPoints.uw}{
        /* background-color: #ff0000; */
        min-width: ${size.uw};
        width: ${getTamanhoDaTela().largura}px;
        flex-direction: row;
        justify-content: space-around;
    
    }


    

`;


export const ContentText = styled.div`
    width: 600px;
    margin-right: 50px;

    /* celular */
    @media ${breakPoints.mm}{
        width: ${getTamanhoDaTela().largura}px;
        text-align: center;
        padding: 0 20px;
        margin-right: 0;
       
    }
    /* @media ${breakPoints.md}{
        width: ${size.md};
        width: ${getTamanhoDaTela().largura}px;
        text-align: center;
        padding: 0 0px;
        margin-right: 0;
        background-color: #55ff06;
    }

    @media ${breakPoints.mqg}{
        min-width: ${size.mqg};
        width: ${getTamanhoDaTela().largura}px;
        text-align: center;
        padding: 0 20px;
        margin-right: 0;
        background-color: green;
    }

    */

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
        padding: 0 20px;
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
        width: ${getTamanhoDaTela().largura}px;
        padding: 0 20px;
        margin-right: 0;
    }

    /* @media ${breakPoints.md}{
        width: ${size.md};
        padding: 0 15px;
        margin-right: 0;
    }

    @media ${breakPoints.mg}{
        width: ${size.mg};
        padding: 0 15px;
        margin-right: 0;
    } */


    /* tablet */
    @media ${breakPoints.tbm}{
        width: ${size.tbm};
        /* padding: 0 15px; */
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

