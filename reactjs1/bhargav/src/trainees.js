import Person from "./person"
function Trainees(){
    let obj=[{
        'name':'sai',
        'rollno':'65'
    }]
    let product =[{
        pid:'1939',
        pname:'sugar'

    },{
        pid:'2343',
        pname:'laptop'
        
    },{
        pid:'355',
        pname:'fan'
    }]
    // return(
    //     <div>
    //         <h1>Trainees</h1>
    //         {/* <Person name="kiran" rollno="212345" /> */}
    //         <Person record={obj}/>
    //     </div>
    // )
    return(
        <div>
            
                <h1>Product details</h1>
                {
                    product.map((ele,i)=>{
                        document.write(i+1+"."+ele.pid +" "+ele.pname+"<br/>")
                    
                } )
                    
                }
            {/* <table border={1} cellSpacing={0} align="center" width={"300px"}>
                <tr><th>S.no</th><th>Name</th><th>Roll No</th></tr>
                {
                    obj.map((ele,i)=>{
                        return(
                            <Person name="kiran" rollno="212345" />
                        )

                    })
                }

            </table>
             */}
        </div>
    )
}
export default Trainees


















// import Student from './student'
// function Trainees() {
//     let student =[{
//         name:'Bhargav',
//         rollno:1219
//     }]
//     return(
//     <div>
//         <h1>Trainees List</h1>
//         <table border={1} cellSpacing={3} align="center" width={'400px'}>
//             <tr><th>S.no</th><th>Name</th><th>Roll no</th></tr>
//         {
//             student.map((ele,i,arr)=>{
//                 return(<Student index={i} name={ele.name} rollno={ele.rollno}/>)
//             })
//         }
//         </table>
//     </div>
//     )
// }
// export default Trainees;