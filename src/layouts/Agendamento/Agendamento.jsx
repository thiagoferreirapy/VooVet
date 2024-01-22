import React, { useState } from "react";
// import logo from '../../images/logo.svg';
import {
  DivContainer,
  ImgAtendimento,
  ContainerAgendamentoForm,
  TitleAgendamento,
  Paragraph,
  ContainerInpusts,
  ContainerInputRadio,
  ContainerCards,
  Button,
  ContentInputs,
  Alert,
} from "./style";
import imgatendimento from "../../images/AgendamentoIMG/imgatendimento.svg";
import Input from "./components/Input";
import InputRadio from "./components/InputRadio";
import CardPet from "./components/CardPet";

import iconBIRD from "../../images/AgendamentoIMG/iconBIRD.svg";
import iconDOG from "../../images/AgendamentoIMG/iconDOG.svg";
import iconCAT from "../../images/AgendamentoIMG/iconCAT.svg";
import iconSILVER from "../../images/AgendamentoIMG/iconSILVER.svg";

import Select from "./components/Select";
import DataTypeAtendimento from "../../services/DataTypeAtendimento";

import create_agendamento from '../../services/api/create_agendamento'


function Agendamento() {
  const [opcaoSelecionada, setOpcaoSelecionada] = useState("");
  const [typeAtendimento, setTypeAtendimento] = useState("");
  const [nameOwner, setNameOwner] = useState("");
  const [emailOwner, setEmailOwner] = useState("");
  const [namePet, setNamePet] = useState("");
  const [services, setServices] = useState("");
  const [errors, setErrors] = useState({
    nameerror: "",
    emailerror: "",
    peterror: "",
  });

  const handleSelecaoChange = (novaSelecao) => {
    setOpcaoSelecionada(novaSelecao);
  };

  const handleTypeAtendimento = (value) => {
    setTypeAtendimento(value);
  };
  const handleSelecService = (selectedValue) => {
    setServices(selectedValue);
    console.log('Valor selecionado:', selectedValue);
  };

  const handleNameOwner = (value) => {
    if (value.length < 3) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        nameerror: "O nome do tutor muito curto.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, nameerror: "" }));
    }
    setNameOwner(value);
  };

  const handleEmail = (value) => {
    if (value.length < 3) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        emailerror: "E-mail inválido.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, emailerror: "" }));
    }
    setEmailOwner(value);
  };

  const handleNamePet = (value) => {
    if (value.length < 3) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        peterror: "O nome do pet muito curto.",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, peterror: "" }));
    }
    setNamePet(value);
  };

  const fazerAgendamento = async () => {
    if (nameOwner.length < 3){
        setErrors((prevErrors) => ({
            ...prevErrors,
            nameerror: "O nome do tutor muito curto.",
        }));
    }
    if (emailOwner.length < 3){
        setErrors((prevErrors) => ({
            ...prevErrors,
            emailerror: "E-mail inválido.",
          }));
    }
    if (namePet.length < 3){
        setErrors((prevErrors) => ({
            ...prevErrors,
            peterror: "O nome do pet muito curto.",
          }));
    }
    if (services.length < 3){
        setErrors((prevErrors) => ({
            ...prevErrors,
            peterror: "O nome do pet muito curto.",
          }));
    }

   


    const data = {
      name_owner: nameOwner,
      email_owner: emailOwner,
      name_pet: namePet,
      type_service: typeAtendimento,
      type_pet: opcaoSelecionada,
      service: services,
    };
    
    console.log(data);

    try {
      console.log('Service')
      const responseData = await create_agendamento(data);
      // Lide com a resposta aqui (se necessário)
      console.log("Dados enviados com sucesso:", responseData);
    } catch (error) {
      // Lide com erros aqui
      console.error("Erro ao enviar os dados:", error);
      // Você também pode querer notificar o usuário sobre o erro, se apropriado
    }
  };
  return (
    <>
      <DivContainer id="agendamento">
        <ImgAtendimento
          src={imgatendimento}
          alt="Imagem do atendimento para pets"
        />
        <ContainerAgendamentoForm>
          <TitleAgendamento>Agendamento</TitleAgendamento>
          <Paragraph>
            Preencha todos os campos para iniciar o seu agendamento
          </Paragraph>
          <ContainerInpusts>
            <ContentInputs>
              <Input
                type={"text"}
                placeholder={"Nome do tutor"}
                required={"required"}
                error = {errors.nameerror}
                onChange={(e) => {
                    console.log(e.target.value);
                    handleNameOwner(e.target.value);
                  }}
                  value={nameOwner}
                
              />
              {errors.nameerror && (
                <Alert>{errors.nameerror}</Alert>
              )}
            </ContentInputs>
            <ContentInputs>
              <Input
                type={"email"}
                placeholder={"E-mail do tutor"}
                required={"required"}
                error = {errors.emailerror}
                onChange={(e) => handleEmail(e.target.value)}
                value={emailOwner}
              />
              {errors.emailerror && (
                <Alert>{errors.emailerror}</Alert>
              )}
            </ContentInputs>
            <ContentInputs>
              <Input
                type={"text"}
                placeholder={"Nome do pet"}
                required={"required"}
                error = {errors.peterror}
                onChange={(e) => handleNamePet(e.target.value)}
                value={namePet}
              />
              {errors.peterror && (
                <Alert>{errors.peterror}</Alert>
              )}
            </ContentInputs>
            <ContainerInputRadio>
              <InputRadio
                type={"radio"}
                name={"atendimento"}
                id={"consulta"}
                required={"required"}
                text={"Consulta"}
                onChange={(e) => handleTypeAtendimento(e.target.id)}
              />
              <InputRadio
                type={"radio"}
                name={"atendimento"}
                id={"exame"}
                value={"exame"}
                required={"required"}
                text={"Exâmes"}
                onChange={(e) => handleTypeAtendimento(e.target.id)}
              />
            </ContainerInputRadio>
            <ContainerCards>
              <CardPet
                type={"radio"}
                name={"typePets"}
                id={"ave"}
                required={"required"}
                text={"ave"}
                icone={iconBIRD}
                selecao={opcaoSelecionada}
                onSelecaoChange={handleSelecaoChange}
              />
              <CardPet
                type={"radio"}
                name={"typePets"}
                id={"cachorro"}
                required={"required"}
                text={"cachorro"}
                icone={iconDOG}
                selecao={opcaoSelecionada}
                onSelecaoChange={handleSelecaoChange}
              />
              <CardPet
                type={"radio"}
                name={"typePets"}
                id={"gato"}
                required={"required"}
                text={"gato"}
                icone={iconCAT}
                selecao={opcaoSelecionada}
                onSelecaoChange={handleSelecaoChange}
              />
              <CardPet
                type={"radio"}
                name={"typePets"}
                id={"silvestre"}
                required={"required"}
                text={"silvestre"}
                icone={iconSILVER}
                selecao={opcaoSelecionada}
                onSelecaoChange={handleSelecaoChange}
              />
            </ContainerCards>
          </ContainerInpusts>
          <Select text={"Tipo de atendimento"} data={DataTypeAtendimento} onSelectChange={handleSelecService} value={services}/>
          <Button onClick={fazerAgendamento}>AGENDAR</Button>
        </ContainerAgendamentoForm>
      </DivContainer>
    </>
  );
}

export default Agendamento;
