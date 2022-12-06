/* eslint no-eval:0 */
import React, {useState} from 'react'
import words from 'lodash.words'
import Functions from './components/Functions'
import MathOperations from './components/MathOperations'
import Numbers from './components/Numbers'
import Result from './components/Result'
import './App.css'

const App = () => {
    // Array Destructuring   
    // 1er posicion = valor inicial
    // 2da posicion = función que va a permitir modificar el valor inicial
    //[xxxx], [setXxxx]

    const [texto, setTexto] = useState('')

    const items = words(texto, /[^-^+^*^/]+/g)

    //Operador ternario: ss similar a un if pero se resuelve en una única línea
    const value = items.length > 0 ? items[items.length-1] : '0'

    //Lo que ejecuta la función
    return (
        <main className='react-calculator'>
            <Result value={value} />
            
            <Numbers onClickNumber = {number =>  setTexto(`${texto}${number}`)} />

            <Functions 
                onClickClear = {()=> setTexto('')}
                onClickDelete = {()=> {
                    if (texto.length > 0) {
                        const newTexto = texto.substring(0, texto.length -1)
                        setTexto(newTexto)
                    }
                }} 
            />
            <MathOperations 
                onClickOperation = {operation => setTexto(`${texto}${operation}`)}
                onClickEqual = {equal => setTexto(eval(texto).toString())}
            />
        </main>
    )
}

export default App