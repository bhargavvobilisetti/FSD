// import { useParams } from "react-router-dom";
// function Productinfo(){
//     const {id} = useParams();
//     //console.log(id)
//     const api ='https://fakestoreapi.com/products'+id
//     return(
//         <div>
//             <h1>Single product</h1>
//             {/* {api} */}

//         </div>
//     )
// }
// export default Productinfo  

import { useEffect ,useState } from "react";
import { useParams } from "react-router-dom"
import axios from "axios"; // npm i axios


function Productinfo()
{
    const {id}=useParams();
    const api = 'https://fakestoreapi.com/products/'+id;
    const [data,setData]=useState({})

    useEffect(()=>{
        singleproduct()
    },[])
    const singleproduct = () =>{
        axios.get(api).then((response) => {
            // console.log(response)
            setData(response.data);            
        });
    }
    return(
        <div>

            <h1>
                Single Product
                {/* {api} */}
                <div className="card">
                            <img src={data.image}   />
                            <p>{data.title}</p>
                            <p>{data.price}</p>
                            <p>{data.category}</p>
                        </div>   

            </h1>
        </div>
    )
}
export default Productinfo