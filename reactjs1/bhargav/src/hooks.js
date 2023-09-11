import { useState } from "react";
function Hooks(){
    // let cnt = 0
    // let cnt = useState(0)
    const [cnt,setCnt] = useState(0) //const cnt-0 clickfunction setCnt(0)
    const [name,setName] = useState('') 
    const [arr,setArr] = useState([10,20,30])
    const [num,findNum] = useState('')
    //const [cnt,setCnt] = useState(10) //const cnt-10 anyfunction setCnt(10)
    //const getcount = (count) => {
    //  cnt = ++count
    //  console.log(cnt)
    // const FindEle{
    //     console.log(arr);
    // }
    //}
    return(
        <div>
            <h1>React Hooks</h1>
            <p>count is {cnt}</p>
            {/* <button onClick = {()=>getcount(cnt)}>Count</button> */}
            <button onClick={()=>setCnt(cnt+1)}>Count</button>
            <br/>
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
            <h2>Name is : {name} </h2>
            
            <input type="text" onChange={(e) => findNum(e.target.value)} />
            <button>Find</button>
            <ul style={{'display':'inline-block'}}></ul>
            {
                arr.map((ele)=>{
                    return(<li>{ele}</li>)
                })
            }
        </div>
    )
}
export default Hooks;





// import { useState } from 'react';

// function Hooks() {
//   // Declare a new state variable, which we'll call "count"
//   //let cnt=0
// //   let cnt = useState(0)
//   const [cnt, setCnt] = useState(0); //const cnt=0 clickfunction setcount(0)
// //   const [count, setCount] = useState(10); //const cnt=0 function name setcount(0)
//     //const getcount=(count)=>{
//         //cnt=++count
//         //console.log(cnt)
//     //}
//     const [name, setName] = useState(''); //const name='',functionname setName
    


//   return (
//     <div>
//       <p>You clicked :{cnt}</p>
//       <button onClick={() => setCnt(cnt+ 1)}>
//         Click me
//       </button><br/>

//       <input type='text' onChange={(e)=>setName(e.target.value)}/>
//       <h2>Name is :{name}</h2>

//     </div>
//   )
// }
// export default Hooks