import React, { useState } from 'react';
// import logo from '../../images/logo.svg';
import { Card, Input, Icon, TextCard } from "./style/styleCard";


function CardPet({type, name, id, required, checked, text, icone, selecao, onSelecaoChange}) {
  const handleChange = () => {
    onSelecaoChange(id);
  };
  return (
    <>
        <Input
        type={type}
        name={name}
        id={id}
        required={required}
        checked={selecao === id}
        onChange={handleChange}
        />

        
        <Card selecionado={selecao === id} htmlFor={id}>
          <Icon
          src={icone}
          alt='icon dos pets'
          />
          <TextCard>{text}</TextCard>
        </Card>
    </>
  );
}

export default CardPet;
