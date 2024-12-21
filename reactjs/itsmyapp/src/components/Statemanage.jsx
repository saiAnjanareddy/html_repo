function Statemanage(){
    let counter=0;
    function updateCounter(){
        ++counter;
        console.log(counter);
    }
    return(
        <div>
        <h2>Initially Counter value is:{counter}</h2>
        <button onClick={updateCounter}>Click here</button>
                </div>
            )
        }
        export default Statemanage;