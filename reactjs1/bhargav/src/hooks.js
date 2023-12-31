import { useState } from "react";
function Hooks(){
    const [count,setcount]=useState(0);
    // 2nd argument is a function name
    const [name,setname]=useState("");//Passing an empty string
    const [arr,setarr]=useState(["apple","banana","apple","papaya"]);
    const [fruitname,setfruitname]=useState("");
    const filterfruits=()=>{
        var filteredarray=arr.filter((ele)=>{
            return (ele===fruitname);
        });
        if(filteredarray.length==0){
            setarr(["apple","banana","apple","papaya"]);
        }
        else{
            setarr(filteredarray);
        }
    }
    // const getcount=()=>{
    //     ++c;
    //     console.log(c);
    // }
    return(
        <div>
            <h1>React Hooks</h1>
            <p>Count is: {count}</p>
            {/* To increment the value in this paragraph tag whenever we are clicking the button, then we use react hooks concept */}
            {/* Mainly we use useState concept */}
            <button onClick={()=>setcount(count+1)}>Increment by 1</button>
            <br />
            {/* Taking input from user and updating the same name in a paragraph tag in real time */}
            <input type="text" onChange={(event)=>setname(event.target.value)} />
            <p>The name is {name}</p>
            <h1>Fruits Market</h1>
            <input type="text" onChange={(e)=>setfruitname(e.target.value)} />
            <button onClick={filterfruits}>Check Fruits</button>
            <br />
            <ul style={{display:"inline-block"}}>
                {/* Display inline-block is for reducing the gap between list style dots and numbers */}
                {
                    arr.map((ele,i)=>{
                        return(<li key={i}>{ele}</li>)
                    })
                }
            </ul>
        </div>
    )
}
export default  Hooks;




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