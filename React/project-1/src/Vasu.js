import App from "./App";
import { Classcomponent } from "./Components/Classcomponent";
import { Parentcomponent } from "./Components/Parentcomponent";
import { Srinivas } from "./Srinivas";
import { Srividya } from "./Srividya";

export function Vasu(){
    return <div>
        <Srividya/>
        <App/>
        <Srinivas/>
        <Classcomponent/>
        <Parentcomponent/>
    </div>
}