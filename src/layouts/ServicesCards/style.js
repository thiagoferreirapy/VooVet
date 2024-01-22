import styled from 'styled-components';

export const DivContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;

export const ContentServices = styled.div`
    width: 40%;
    height: 900px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 100px;
    position: relative;
    
`;
export const ContentServicesCards = styled.div`
    width: 60%;
    height: 900px;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding: 100px;
    position: relative;
    
`;


export const TitleServices = styled.h1`
    font-size: 70px;
    font-weight: 600;
    color: #0E2F56;

`;
export const ImgLogo = styled.img`
    width: 380px;
    margin-bottom: 100px;
`;


export const ContentTextBottom = styled.div`
    position: absolute;
    bottom: 0%;
    left: 10%;
`;

export const TextParagraph = styled.p`
    width: 450px;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 50px;
    color: #0E2F56;
`;
export const SpanText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 50px;
    color: #118DF0;
`;


export const ImgArrow = styled.img`
    width: 500px;
`;

export const ContentCards = styled.div`
    width: 100%;
    column-count: 3;
    column-gap: 30px;
    
`;

export const Cards = styled.p`
    display: inline-block;
    background-color: #118DF0;
    padding: 20px; 
    border: none;
    border-radius:20px;
    text-align: center;
    margin-bottom: 50px;

    font-size: 16px;
    font-weight: 600;
    color: #fff;
`;
export const AlertServices = styled.li`
    font-size: 16px;
    font-weight: 600;
    color: #333;

    margin: 55px ;

`;