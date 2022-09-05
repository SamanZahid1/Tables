function calculate(){
    let table = document.querySelector("#table").value;
    document.querySelector("#result").innerHTML= ""; 
    
 for (let i=0; i<10; i++ ){
     document.querySelector("#result").innerHTML+=` ${table} X ${i+1} = ${table * (i+1)} <br/>`;
 }
}