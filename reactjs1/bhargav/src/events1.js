function Events1(){
    function getdata(e,arg2){
        console.log(e.target.name+ "value is : "+e.target.value+" "+arg2);

    }
    return( 
        <div>
            <h1>Input Events</h1>
            {/* <input type="text" name="name" onChange={getdata}/> */}
            <input type="text" name="name" onChange={(e)=>getdata(e,'bhargav')}/> 
        </div>
    );
}
export default Events1; 