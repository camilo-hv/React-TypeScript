import { useState } from 'react'

export const Counter = () => {

    const [counter, setCounter] = useState(0)

    const incrementar = (number: number = 1) => {
        setCounter(counter + number);
    }

  return (
    <div className='mt-5'>
        <h2>Counter: useState</h2>
        <span>Valor: {counter}</span>
        <br />
        <button
            onClick={() => incrementar()}
            className='btn btn-outline-primary mt-2'>
                +1
        </button>

        <button
            onClick={() => incrementar(5)}
            className='btn btn-outline-primary mt-2'>
                +1
        </button>

        <button
            onClick={() => setCounter(0)}
            className='btn btn-outline-danger mt-2'>
                Reset
        </button>

    </div>
  )
}
