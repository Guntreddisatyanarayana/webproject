import { createContext } from "react";
 export const Usercontext=createContext();
 export const Usercontextprovider=({children})=>{
    return(
<Usercontext.Provider value={"satya"}>
               {children}
</Usercontext.Provider>
)}

