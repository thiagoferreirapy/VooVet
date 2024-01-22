import styled from 'styled-components';




export const ContentSlider = styled.div`
    margin-top: 100px;
    width: 100%;
    height: 400px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 50px;
    background-image: url(${props => props.imagemDeFundo});
    background-repeat: no-repeat;
    background-size: cover;
    cursor: grab;

    &:active{
        cursor: grabbing;
    }
`;

export const TitleSlider = styled.h2`
    font-size: 30px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 50px;
`;

