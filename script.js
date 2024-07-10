//your JS code here. If required.
document.getElementById("btn").onclick = (e)=>{
    e.preventDefault();
    let age = document.getElementById("age").value;
    let name = document.getElementById("name").value;
    
    if(age>18){
        setTimeout(()=>{
            alert("Welcome, "+name+". You can vote.");
        },4000)
    }
    else{
        setTimeout(()=>{
            alert("Oh sorry "+name+". You aren't old enough.");
        },4000)
    }
}