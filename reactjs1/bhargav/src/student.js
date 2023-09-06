// function Student(p){
//     // let name='KARTHIK'
//     return(
//              <tr><td>{(p.index)+1}</td><td>{p.name}</td><td>{p.rollno}</td></tr>
//             // <>
//             // <ul>
//             //     <li>
//             //     </li>
//             // </ul>
//             // </>
//     )
// }
// export default Student;

function Student(props){
    return(
        <>
            {/* Use curly braces to use a variable name */}
            <tr><td>{props.name}</td><td>{props.rollno}</td><td>{props.branch}</td><td>{props.clg}</td></tr>
        </>
    )
};
export default Student;