import { useContext } from "react";
import { Usercontext } from "./UsecontextExample";
const Child = (props) => {
    const moddata=useContext(Usercontext);
    

    const {name,age}=props
  return (
    <div>
        <h1>Father:{name}</h1>
        <h1>Age:{age}</h1>
        <h1> Son:{moddata}</h1>
    </div>
  )
}

export default Child