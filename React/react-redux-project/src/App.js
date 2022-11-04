import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { TestComponent } from './TestComponent';

function App() {
  let count = useSelector((state)=>state.count);
  let dispatch = useDispatch();
  console.log(count);
  const incrementCount = () => {
    dispatch({type:'INCREMENT'})
  }
  const decrementCount = () => {
    dispatch({type:'DECREMENT'})
  }
  return (
    <div className="App">
      <h2>Count : {count}</h2>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>decrement</button>
      <hr/>
      <TestComponent/>
    </div>
  );
}

export default App;
