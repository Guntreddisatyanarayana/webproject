import { useEffect, useReducer } from 'react';
const URL="https://jsonplaceholder.typicode.com/users";
const reducer=(state,action)=>{
  if(action.type==="UPDATE_DATA"){
     return{
      ...state,
      userdata:action.payload,
    }
  }
  if(action.type==="DELETE_PERSON"){
    const newuserdata=state.userdata.filter((comingid)=>{ 
      return comingid.id !== action.payload;
    });
    return{
      ...state,
      userdata:newuserdata,
    }
      
    }
    return state;
  }
 
const intilisize={
  userdata:[],
};

const Usereduceexample1 = () => {
const [state, dispatch] = useReducer(reducer,intilisize);
 const fetchedata=async (apiurl)=>{
  const response=await fetch(apiurl);
  const data=await response.json();
  dispatch({type:"UPDATE_DATA",payload:data})
}

 useEffect(()=>{
  fetchedata(URL);

},[])
const handledelete=(id)=>{
dispatch({type:"DELETE_PERSON", payload:id});

}

  return (
    <div className='ram'>
       {
        state.userdata.map((eachobj)=>{
          const {id,name,username}=eachobj;
          return <ul key={id}>
            <li> id: {id}</li>
            <li> Name:{name}</li>
            <li>Username: {username}</li>
            <button type='submit' onClick={()=>{handledelete(id)}}>Delete</button>
            <button>Edit</button>
          </ul>
          })
       }
    </div>
  )
}

export default Usereduceexample1