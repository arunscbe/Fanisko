$(document).ready(function(){
    var runData = [
        {"run":1,"color":"white"},{"run":2,"color":"yellow"},{"run":3,"color":"yellow"},
        {"run":4,"color":"blue"},{"run":6,"color":"red"},{"run":'ALL',"color":"grey"}
    ];
    scores(runData);
})

const scores = (runData)=>{
    let cont = document.getElementById('footerContainer');
    let ul = document.createElement('ul');
        ul.setAttribute('style', 'padding-left:15%;width:100%;text-align:center;margin:auto');
        ul.setAttribute('class', 'scoreList');
    runData.map((data)=>{
        let li = document.createElement('li');
        li.innerHTML = data.run; 
        li.setAttribute('style', `display: inline-block;font-size: 40px;margin-left:15px; padding-left:40px; padding-right:40px;padding-top:10px;padding-bottom:10px; background-color:black; color:${data.color}; border-radius: 15px; border: 1px solid red;font-family: Arial, sans-serif;`);    
        ul.appendChild(li);     
    });
    cont.appendChild(ul);      
}
const playerDisplay = () => {
    
}