import { useState } from "react";
import { FormContainer, Form, Input, StyledLabel } from "./styled";

export const FormularioCadastro = (props) => {


  function onChangeUrl(e){
    props.setUrlFoto(e.target.value)
  }

  function onChangeDescricao(e){
    props.setDescricao(e.target.value)
  }

  function onChangeTituloFoto(e){
    props.setTituloFoto(e.target.value)
  }

  function submit (event){
    props.setUrlFoto("")
    props.setDescricao("")
    props.setTituloFoto("")

  }

  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={props.urlFoto} onChange={onChangeUrl}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={props.descricao} onChange={onChangeDescricao}/>
        </StyledLabel>
        <StyledLabel htmlFor="titulo">
          Título:
          <Input id="titulo" value={props.tituloFoto} onChange={onChangeTituloFoto}/>
        </StyledLabel>
        <button onClick={submit}>Clique para enviar!</button>
      </Form>
    </FormContainer>
  );
};


export default FormularioCadastro