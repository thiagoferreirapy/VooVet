import styled from 'styled-components';


export const InputAgendamento = styled.input`
    width: 230px;
    height: 40px;
    border: 2px solid ${(props) => (props.error ? '#d12b47' : '#0E2F56 ')};
    border-radius: 10px;
    padding-left: 10px;
    font-size: 16px;
    font-weight: 500;
    /* margin:10px 30px; */
    &:placeholder{
        color: #0E2F56;
    }
    &:focus{
        outline: 1px solid ${(props) => (props.error ? '#d12b47' : '#0E2F56 ')};
    }

`

