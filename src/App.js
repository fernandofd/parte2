import React,{useState} from "react";
import Cabecalho from "./Componentes/Cabecalho";
import Secao from "./Componentes/Secao";
import Ligado from "./img/lampadasAcesa.png"
import Apagado from "./img/lampadasApagada.png"


export default function App(){
   
    let [num1, setNum1]=useState (0)

    let [num2, setNum2]=useState (0)

    let [resultado, setResultado]=useState (0)

    let [operacao, setOperacao]=useState ("+")

    let [status, setStatus]=useState ("+")


    function testarResultado(){
        if(operacao=="+"){
            return num1+num2
        }else if(operacao=="-"){
            return num1-num2
        }else if(operacao=="*"){
            return num1*num2
        }else if(operacao==":"){
            return num1/num2
        }
    }

    function testaoperacao(operacao){
       
        if(operacao=="+")
        {
            operacao="-"
        }else if(operacao=="-")
        {
            operacao="*"
        }else if(operacao=="*")
        {
            operacao=":"
        }else if(operacao==":")
        {
            operacao="+"
        }
    return operacao    
    }

    
    return (
        <>
       

<nav class="navbar navbar-dark bg-primary navbar-expand-lg">

    <div class="container">
      <a class="navbar-brand me-5" href="#">Calculadora com React -Fernando Fernandes Dias neves</a>

     
      <img class="navbar-brand" src="/img/senai.png"></img>

      <button class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#menu-links">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="menu-links">
        <ul class="navbar-nav me-auto">
          <li class="nav-item">
            <a href="/index.html" class="nav-link">Home</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>





       <div class="container-fluid ">
       <div class="row">

       <div class="col-12 text-center font-weight-bold mt-5">
       <h4>Calculadora SA React</h4>
        </div>



      
      <div class="col-2 mt-5 ms-5">
        <h4 class="col-12 mt-2 text-center">Número: {num1}</h4>
        <button class="btn btn-primary ms-1  col-5 " onClick={()=>setNum1(num1+1)}><h2>+</h2></button>
        <button class="btn btn-primary  ms-3 col-5  " onClick={()=>setNum1(num1-1)}><h2>-</h2></button>
        </div>

        <div class="col-1 mt-5 ms-5 text-center">
        <h4 class="col-12 mt-2">Operador</h4>
        <button class="btn btn-primary ms-4 " onClick={()=>setOperacao(testaoperacao(operacao))}><h2>{operacao} </h2></button>
        </div>
    
        <div class="col-2 mt-5 ms-5 text-center">
        <h4 class="col-12 mt-2">Número: {num2}</h4>
        <button class="btn btn-primary ms-1  col-5 " onClick={()=>setNum2(num2+1)}><h2>+</h2></button>
        <button class="btn btn-primary  ms-3 col-5  " onClick={()=>setNum2(num2-1)}><h2>-</h2></button>
        </div>


        <div class="col-2 mt-5 ms-5 text-center">
        <h4 class="col-12 mt-2">Resultado= {resultado}</h4>
        <button class="btn btn-primary ms-1  col-5 " onClick={()=>setResultado(testarResultado())}><h2>=</h2></button>
        </div>

        

        <div class="ms-5 mt-5">
            <img style={{width:'100px'}} src={status?Ligado:Apagado}/>
            <button class="btn btn-primary ms-1  col-1 " onClick={()=>setStatus(!status)}>{status?'Desligar':'Ligar'}</button>

        </div>
       
        

        
 
        </div>
        </div>
               
        
       
        

        
        
        
        </>
    )
}