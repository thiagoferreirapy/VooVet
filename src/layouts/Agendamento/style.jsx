import styled from 'styled-components';

export const DivContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;


export const ImgAtendimento = styled.img`
    width: 35%;
`
export const ContainerAgendamentoForm = styled.div`
    width: 65%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`
export const TitleAgendamento = styled.h1`
    width: 500px;
    font-size: 30px;
    font-weight: 600;
    color: #1E1E1E;
    text-align: left;
`

export const Paragraph = styled.p`
    width: 500px;
    font-size: 16px;
    font-weight: 600;
    color: #1E1E1E;
    text-align: left;
`

export const ContainerInpusts = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`
export const ContentInputs = styled.div`
    display: flex;
    flex-direction: column;
    width: 230px;
    height: 70px;
    text-align: left;
    margin: 10px 30px ;
`
export const Alert = styled.span`
    font-size: 12px;
    font-weight: 500;
    margin: 5px 10px;
    color: #d12b47;
`


export const ContainerInputRadio = styled.div`
    width: 230px;
    margin: 10px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`

export const ContainerCards = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`
export const Button = styled.button`
    width: 300px;
    height: 50px;
    border: none;
    border-radius: 10px;
    background-color: #182c449d;
    font-size: 16px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    transition: 0.3s all ease;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;

    &:hover{
        background-color: #0E2F56;
    }
`

