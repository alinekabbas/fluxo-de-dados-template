import { FormContainer, Form, Input, StyledLabel } from "./styled";

export const FormularioCadastro = (props) => {
  
  function onChangeUrl(e) { // e = event
    props.setUrlFoto(e.target.value)
  }

  function onChangeDescricao(e) { // e = event
    props.setDescricao(e.target.value)
  }
  function onChangeTitulo(e) { // e = event
    props.setTituloPostagem(e.target.value)
  }
  return (
    <FormContainer>
      <h2>Insira sua postagem abaixo: </h2>
      <Form>
        <StyledLabel htmlFor="foto">
          Imagem:
          <Input id="foto" value={props.urlFoto} onChange={onChangeUrl}/>
        </StyledLabel>
        <StyledLabel htmlFor="titulo">
          Titulo:
          <Input id="titulo" value={props.tituloPostagem} onChange={onChangeTitulo}/>
        </StyledLabel>
        <StyledLabel htmlFor="descricao">
          Descrição:
          <Input id="descricao" value={props.descricao} onChange={onChangeDescricao} />
        </StyledLabel>
      </Form>
    </FormContainer>
  );
};


export default FormularioCadastro