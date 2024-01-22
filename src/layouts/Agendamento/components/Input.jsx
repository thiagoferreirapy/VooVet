import React from 'react';
// import logo from '../../images/logo.svg';
import { InputAgendamento } from "./style/styleInput";


function Input({type, placeholder, value, required, error, onChange}) {

  return (
    <>
        <InputAgendamento
        type={type}
        placeholder={placeholder}
        value={value}
        required={required}
        onChange={onChange}
        error={error}
        />
    </>
  );
}

export default Input;
