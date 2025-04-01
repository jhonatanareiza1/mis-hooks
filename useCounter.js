import React, { useState } from 'react'

const useCounter = (valorInicial = 10) => {
 const [counter, setCounter] = useState(valorInicial);
 const incrementa =()=>{
    setCounter(counter +1)
 }
 const resta =()=>{
    setCounter(counter -1)
 }

 const reinicio =()=>{
    setCounter(valorInicial)
 }

 return{
    counter,
    incrementa,
    resta,
    reinicio
 };
}

export default useCounter
