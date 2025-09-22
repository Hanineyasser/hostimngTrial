import React, { useEffect, useState } from 'react'

const Fcomponent1 = () => {

    const [counter,  setCounter] = useState(100)
    const [counter2,  setCounter2] = useState(200)
    useEffect(() => {
        console.log("Component rendered or updated")
    }, [counter]) // [] lw fady hy3ml render marra wa7da bs lma a3ml render 3ady hy3ml render kol ma el state bttghayar
    const increment = () => {
        setCounter(counter + 1)
    }
    const decrement = () => {
        setCounter(counter - 1)
    }
    const increment2 = () => {
        setCounter2(counter2 + 1)
    }
    const decrement2 = () => {
        setCounter2(counter2 - 1)
    }
  return (
      <>
          <div>
              <button onClick={increment}>+</button>
              <span>{counter}</span>
              <button onClick={decrement}>-</button>
          </div>

          <div>
              <button onClick={increment2}>+</button>
              <span>{counter2}</span>
              <button onClick={decrement2}>-</button>
          </div>
      </>
  );
}

export default Fcomponent1