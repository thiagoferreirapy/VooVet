import React, { useState } from 'react';
// import logo from '../../images/logo.svg';
import { Inputradio, ConatinerInputRadio, Text } from "./style/styleInputRadio";


function InputRadio({type, name, id, required, text, onChange}) {

  return (
    <ConatinerInputRadio>
        <Inputradio
        type={type}
        name={name}
        id={id}
        required={required}
        onChange={onChange}
        />

        <Text htmlFor={id}>{text}</Text>
    </ConatinerInputRadio>
  );
}

export default InputRadio;
