
import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, incrementBy } from '../../redux/features/counterSlice';

const CounterRedux = () => {

  let dispatch = useDispatch();
  
  /* getting data from store */
  let counterState = useSelector((state) =>{
    return state["counter"];
  })

  let {count} = counterState;

  function clickInc(){
    dispatch(increment());
  }

  function clickDec() {
    dispatch(decrement());
  }

  function clickIncBy() {
    dispatch(incrementBy(5));
  }

  return (
    <>
    <div className='container d-flex justify-content-center align-content-center'>
      <div className='row'>
        <div className='col-12'>
          <div className='card p-5 d-flex justify-content-center align-content-center m-5'>
            <p>Count: {count}</p>
            <div className='btn-card d-flex justify-content-center align-content-center'>
              <button className='btn btn-primary m-2' onClick={clickInc}>Increment</button>
              <button className='btn btn-danger m-2' onClick={clickDec}>Decrement</button>
              <button className='btn btn-info m-2' onClick={clickIncBy}>Increment by 5</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default CounterRedux;