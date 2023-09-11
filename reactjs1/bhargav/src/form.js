import React, { useState } from "react";
function Form(){
    const [rollno,setRollno] = useState('');
    const [name,setName] = useState('');
    function handleSubmit(event){
        event.preventDefault();
        alert("My roll no. is "+rollno);
        alert("Name is "+name);
    }
    // console.log(rollno)
    return(
        <>
            <h1>This is Form page</h1>
            <form onSubmit={handleSubmit}>
                <label>Roll no</label>
                <input type="text" name="rollno" onChange={(e) => setRollno(e.target.value)} />
                <br/>
                <label>Name</label>
                <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
                <br/>
                <input type="submit" value="submit" />
            </form>
        </>
    )
}
export default Form;