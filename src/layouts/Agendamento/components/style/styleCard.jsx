import styled from 'styled-components';




export const Input = styled.input`
    display: none;
`;

export const Card = styled.label`
    width: 100px;
    height: 70px;
    border: none;
    border-radius: 20px;
    background-color: ${(props) => (props.selecionado ? '#0E2F56' : '#118DF0')};

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;
    cursor: pointer;
    transition: 0.3s all ease-in-out;

    &:hover{
        background-color: #0E2F56;
    }
`;

export const Icon = styled.img`
    width: 30px;
    margin: 5px;
`;

export const TextCard = styled.p`
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 600;
    color: #fff;
   
`;

