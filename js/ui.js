$(document).ready(function(){
    var arr = ['1', '2', '3', '4','6','ALL'];
    var test = [{
        "number":1,
        "color":"red",
        "boundary":"green"
    },{
        "number":2,
        "color":"yellow",
        "boundary":"green"
    },{
        "number":3,
        "color":"orange",
        "boundary":"green"
    }];
    scores(arr);
})

const scores = (data)=>{
    var cont = document.getElementById('footerContainer');
    var ul = document.createElement('ul');
    ul.setAttribute('style', 'padding-left:15%;width:100%;text-align:center;margin:auto');
    ul.setAttribute('class', 'scoreList');
    // test.map((data)=>{
    //     var li = document.createElement('li');
    //     li.innerHTML = data.number; 
    //     li.setAttribute('style', 'display: inline-block;font-size: 40px;margin-left:15px; padding-left:40px; padding-right:40px;padding-top:10px;padding-bottom:10px; background-color:red; color:white; border-radius: 10px; font-family: Arial, sans-serif;');    
    //     ul.appendChild(li);     
    //     console.log(data.number);
    // });
    for (i = 0; i <= data.length - 1; i++) {
        
        var li = document.createElement('li');  
        li.innerHTML = data[i];    
        li.setAttribute('style', 'display: inline-block;font-size: 40px;margin-left:15px; padding-left:40px; padding-right:40px;padding-top:10px;padding-bottom:10px; background-color:black; color:white; border-radius: 10px; font-family: Arial, sans-serif;');    
        ul.appendChild(li);     
    }
    cont.appendChild(ul);      
}