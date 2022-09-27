import logo from './logo.svg';
import './App.css';
import FillTextUser from './Components/FillTextUser';
import FillTexUser1 from './Components/ClassComp/FillTexUser1';
import { ClassComp } from './ParentToChild_class/ClassComp';
import { AllComp } from './ParentToChildComp_Fun/AllComp';
import { AllFunctionalComp } from './ParentTochild_button_fun/AllFunctionalComp';
import { Child_p_Fun } from './ChildTo_Parent_fun/Child_p_Fun';
import { Child_P_Class } from './ChildToParent_Class/Child_P_Class';

function App() {
  return (
    <div className="App">
      {/* <FillTextUser/> */}
      {/* <FillTexUser1/> */}
      {/* <AllComp/> */}
      {/* <AllFunctionalComp/> */}
      {/* <ClassComp/> */}
      {/* <Child_p_Fun/> */}
      <Child_P_Class/>
    </div>
  );
}

export default App;
