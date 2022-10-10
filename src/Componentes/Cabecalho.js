import React from "react";
import Informacao from "./Informacao";

export default function Cabecalho() {

    const idade = 44
    const altura = 1.80

    const mult=(v1,v2)=>{
        return v1*v2
    }
    const tel =()=>{
        return"31-999999999"
    }



    return (
        <>
            <header>
                <h1>  Componente com React</h1>
                <Informacao
                    nome="Fernando Fernandes"
                    email="0000106444@senaimgaluno.com.br"
                    cidade="Nova Lima"
                   
                    idade={idade}
                    altura={altura}
                    tel={tel}
                    multiplicacao={mult}

                />
            </header>
        </>
    )
}