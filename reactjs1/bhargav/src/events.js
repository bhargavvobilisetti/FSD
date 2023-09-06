let arr=[10,20,30]
let res =[{
    name:"bhargav",
    rollno:1
},{
    name:'hi   ',
    rollno:2
},{
    name:'B',
    rollno:12
}]
function Events(){
    function getdata(name){
        alert('Name is:'+ name);  
        res.map((ele,i)=>{
             document.write(i+1+"."+ele.name+""+ele.rollno+"<br/>")
           
        } ) ;
    }
    return (
        <div>
            <h1>Events</h1>
            <button onClick={()=>getdata("ronaldo")}>click me</button>
        </div>
    )
}
export default Events