import React from "react";

export default function Informacao(props){
  
  let num1= 10
  let num2= 5
  
  
  return(
    <>
    <section>
      <hr/>
      <h2>   Nome: {props.nome}</h2>
      <h3>   E-mail: {props.email}</h3>
      <h3>   Cidade: {props.cidade}</h3>
      <p>   Idade: {props.idade}</p>
      <p>   Altura: {props.altura}</p>
      <p>   Telefone: {props.tel()}</p>
      <p>   {"A multiplicação:" + num1 + "*" + num2 + " = " + props.multiplicacao(num1,num2)}</p>

    </section>
    </>
  )
}