import './App.css';
import {useState,useEffect} from 'react'

function App() {
  const [boxState,setBoxState] = useState([false,false,false])

  // useEffect(()=>{
  //   console.log(boxState)
  // },[boxState])

  const handleChange = (e ,ind)=>{
    const temp = [...boxState];
    console.log(ind,boxState ,"ind , boxstate")
    console.log(e.target.checked,"check")
    if(e.target.checked){
      temp[ind] = true
      setBoxState([...temp])
    }
    else
      temp[ind] = false
      setBoxState(temp)
  }

  return (
    <div className="App">
      {boxState.map((ele, ind)=>{
        return(
          <div> 
            <input type="checkbox" onChange={(e)=>handleChange(e,ind)
              } value={boxState}></input>
              <span style={{marginLeft: "20px"}}>{boxState[ind]?"On":"Off"}</span>
          </div>
        )
      })}
     
    </div>
  );
}

export default App;
