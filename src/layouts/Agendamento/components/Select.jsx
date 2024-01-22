import React, { useState } from 'react';
// import logo from '../../images/logo.svg';
import { SelectContainer } from "./style/styleSelect";


function Select({text, data, onSelectChange}) {
  const [selectedValue, setSelectedValue] = useState('');

  const handleSelectChange = (event) => {
    const value = event.target.value;

    // Verifica se a mudança ocorreu por interação do usuário (Enter ou clique)
    const isUserInteraction = event.type === 'change';

    // Verifica se o valor é diferente do valor atual antes de atualizar o estado
    if (isUserInteraction && value !== selectedValue) {
      setSelectedValue(value);

      // Se necessário, chame a função de callback para informar sobre a seleção
      if (onSelectChange) {
        onSelectChange(value);
      }
    }
  };


  return (
    <SelectContainer id="selecao" onChange={handleSelectChange} value={selectedValue}>
        <option disabled selected value="">
            {text}
        </option>
        {data.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </SelectContainer>
  );
}

export default Select;
