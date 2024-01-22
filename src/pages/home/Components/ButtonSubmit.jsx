import styled from 'styled-components';

function ButtonSubmit({ value, type }) {

    const Button = styled.button`
        width: 100%;
        height: 40px;
        margin-top: 30px;
        border: none;
        border-radius: 5px;
        background-color: #444;
        cursor: pointer;
        color: #fff;
    `;

    return (
        <>
            <Button type={type} value={value}>
                {value}
            </Button>
        </>
    )
} 

export default ButtonSubmit;