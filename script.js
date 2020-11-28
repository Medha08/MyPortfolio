
let result ;
let model = {
    theme:"light",
    location:"default.css",
    ques:"What I do?",
    ans:"I am a software developer and I love both code and coffee."
}
async function getData(){
    result = await fetch("fixtures.json").then(res => res.json())
}


let modeObj = localStorage.getItem("modeObj");

if(modeObj == null || modeObj.theme == undefined){
    setTheme(model);
}else{
    setTheme(modeObj);
}
getData();

let themeDots = document.getElementsByClassName("quirk-dot");

for(var i=0;i<themeDots.length;i++){
   themeDots[i].addEventListener("click",function(){
       let mode = this.dataset.mode;
       for (var j = 0; j< result.length;j++){
           if(result[j].theme == mode){
               setTheme(result[j])
           }
       }
       
   })
}

function setTheme(mode) {

    document.getElementById("theme-style").href= mode.location;
    document.getElementById("quirk-ques").innerText = mode.ques;
    document.getElementById("quirk-ans").innerHTML = mode.ans;

    localStorage.setItem("modeObj",mode);
    
}
