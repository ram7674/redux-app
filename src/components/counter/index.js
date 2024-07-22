import React, { useState } from 'react'

const Counter = () => {

  const [increment, setIncrement] = useState(0);

  function handleIncrease(){
    setIncrement(increment + 1);
  }

  function handleDecrement() {
    setIncrement(increment - 1);
  }

  function handleIncrementBy() {
    setIncrement(increment + 5);
  }

  return (
    <>
    <div className='container d-flex justify-content-center align-content-center'>
      <div className='row'>
        <div className='col-12'>
          <div className='card p-5 d-flex justify-content-center align-content-center m-5'>
            <p>Count: {increment}</p>
            <div className='btn-card d-flex justify-content-center align-content-center'>
              <button className='btn btn-primary m-2' onClick={handleIncrease}>Increment</button>
              <button className='btn btn-danger m-2' onClick={handleDecrement}>Decrement</button>
              <button className='btn btn-info m-2' onClick={handleIncrementBy}>Increment by 5</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Counter;