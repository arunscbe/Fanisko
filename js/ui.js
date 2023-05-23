$(document).ready(function(){
    var arr = ['1', '2', '3', '4', '5','6','ALL'];
    scores(arr);
})

const scores = (data)=>{
    var cont = document.getElementById('footerContainer');
    var ul = document.createElement('ul');
    ul.setAttribute('style', 'padding: 0; margin: 0;background-color:blue;width:100%;text-align:center;margin:auto');
    ul.setAttribute('class', 'scoreList');
    for (i = 0; i <= data.length - 1; i++) {
        var li = document.createElement('li');  
        li.innerHTML = data[i];    
        li.setAttribute('style', 'display: inline-block;font-size: 40px;margin-left:15px; padding-left:40px; padding-right:40px;padding-top:10px;padding-bottom:10px; background-color:red; color:white; border-radius: 10px; font-family: Arial, sans-serif;');    
        ul.appendChild(li);     
    }
    cont.appendChild(ul);      
}