import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { TestComp } from './TestComp';

function App() {
  let count = useSelector((state)=>state.count);
  let dispatch = useDispatch();
  const incrementCount = () => {
    dispatch({type:'INCREMENT'})
  }
  const decrementCount = () => {
    dispatch({type: 'DECREMENT'})
  }
  return (
    <div className="App">
      <h2>Count : {count}</h2>
      <button onClick={incrementCount}>Increase</button>
      <button onClick={decrementCount}>Decrement</button>
      <hr/>
      <TestComp/>
    </div>
  );
}

export default App;
