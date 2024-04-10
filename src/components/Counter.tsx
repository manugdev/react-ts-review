import { useState } from "react"

export const Counter = () => {

  const [counter, setCounter] = useState<number>(0)

  const incrementar = (numero: number = 1):void => {
    setCounter(counter + numero)
  }

  return (
    <div className='mt-2'>
      <h4>Counter</h4>
      <span>Valor: {counter}</span>
      <br />
      <button onClick={() => incrementar()} className="btn btn-outline-primary mt-2">
        +1
      </button>
      <button onClick={() => incrementar(2)} className="btn btn-outline-primary mt-2 mx-2">
        +2
      </button>
      <button onClick={() => setCounter(0)} className="btn btn-outline-danger mt-2">
        Reset
      </button>
    </div>
  )
}
