function calculate(){
    let table = document.querySelector("#table").value;
    document.querySelector("#result").innerHTML= ""; 
    
 for (let i=1; i<11; i++ ){
     document.querySelector("#result").innerHTML+=` ${table} X ${i} = ${table * i} <br/>`;
 }
}