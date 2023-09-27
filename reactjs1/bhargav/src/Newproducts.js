// import { useState, useEffect } from "react"
// import axios from "axios"
// import { Link } from "react-router-dom"

// function Newproduct(){
//     const [data,setData] = useState([]) //const data=[]
//     const [category,setCategory] = useState([]) //const category=[]
//     const [cnt, setCnt] = useState(0) // const cnt =0
//     const [selectcat,setSelectcat] = useState('');
//     useEffect(()=>{
//         getproductslist()
//         getcategory()
//     },[selectcat])
//     const getproductslist = ()=>{
//         axios.get('https://fakestoreapi.com/products').then((response)=>{
//            // console.log(response.data)
//            let res = response.data
//            if(selectcat === ''){
//             setData(res)
//            }else{
//            // console.log(selectcat)
//             let filtered_data = res.filter((ele)=>{
//                 return (ele.category === selectcat)
//                })
//             if(filtered_data.length == 0){
//                 setData(res)
//             }else{
//                 setData(filtered_data)
//             }               
//            }           
//         })
//     }

//     const getcategory = ()=>{
//         axios.get('https://fakestoreapi.com/products/categories').then((response)=>{
//            // console.log(response.data)
//             setCategory(response.data)
//         })
//     }
//     return(
//         <>
//             <h1>New Products</h1>
//             {/* <p>{cnt}</p>
//             <button onClick={()=>setCnt(cnt +1 )}>Incr by 1</button> */}
//             <div>
//                 <select style={{width:"300px",height:"30px"}} value={selectcat} onChange={(e)=>setSelectcat(e.target.value)}>
//                     <option>--select category</option>
//                     {category.map((ele) => (
//                     <option key={ele} value={ele}>
//                         {ele}
//                     </option>
//                     ))}
//                 </select>
//             </div>
//             <div className="products-list">
//             {
//                 data.map((ele,i)=>{
//                     return(
//                         <div className="card" key={i}>
//                             <Link to={`../singleproduct/${ele.id}`}><img src={ele.image} alt="" /></Link>


//                             {/* <a href={`../singleproduct/1`}><img src={ele.image} alt="" /></a> */}
//                             <p>{ele.title}</p>
//                             <p>{ele.price}</p>
//                             <p>{ele.category}</p>
//                         </div>
//                     )
//                 })
//             }
//             </div>
//         </>
//     )
// }
// export default Newproduct

// // import { useEffect,useState } from "react";

// // import axios from "axios";
// // import "./products.css";
// // import Productcard from "./Productcard";
// // function NewProducts(){
// //     const [data,setData]=useState([]);
// //     const [count,setCount]=useState(0);
// //     const api="https://fakestoreapi.com/products";
// //     // useEffect(()=>{
// //     //     getProductList()
// //     // },[]);
// //     // Single time calling API if given empty square brackets
// //     useEffect(()=>{
// //         getProductList()
// //     },[count]);
// //     // [count] means the function call gets executed based on the count value
// //     const getProductList=()=>{
// //         axios.get(api).then((response)=>{
// //             // console.log(response.data);
// //             setData(response.data);
// //         });
// //     };
// //     return(
// //         <div>
// //             <h1>List of the Products</h1>
// //             <p>{count}</p>
// //             <button onClick={()=>setCount(count+1)}>Count</button>
// //             <div className="products-list">
// //             {
// //                 data.map((ele,i)=>{
// //                     return(
// //                         <>
// //                         <Productcard res={ele} />
// //                         <Productcard image={ele.image} title={ele.title} price={ele.price} category={ele.category} />
// //                         <Productcard {...ele} />
// //                         </>
// //                     );
// //                 })
// //             };
// //             </div>
// //         </div>
// //     );
// // };
// // export default NewProducts;