/*function Test4(props){ //props->properties//
    return(
        <div>
            <div style={{color:"brown"}}>
               <marquee><h1>Welcome to the Marvel World!!</h1></marquee>
               <div style={{color:"Blue"}}></div>
               <h2><center>Hello my id is: {props.empId}</center></h2>
               <div style={{color:"skyblue"}}>
               <h3><center>My name is: {props.empName}</center></h3>
               <div>
               <button onDoubleClick={displayInfo}>Click me</button>
               </div>
               </div>
            </div>
        </div>
    )
}
export default Test4;*/


function Test(){
    function displayInfo(){
        alert("This is Event concept in Reactjs application")
    }
    return(
        <div>
            <button onDoubleClick={displayInfo}>Click me</button>
        </div>
    )
}
export default Test;

