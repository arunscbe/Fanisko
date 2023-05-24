$(document).ready(function(){
    let C =''; 
    $.ajax({
        url: "https://d1u2maujpzk42.cloudfront.net/matchdata/1198/players.json",
        type: 'GET',
        success: function(res) {
            C = res;
            console.log(res);  
            let _P = res; 
            countryDisplay(res.first_innings_shortcode,res.second_innings_shortcode);         
        }
    });
    var runData = [
        {"run":1,"color":"white","id":"one"},{"run":2,"color":"yellow","id":"two"},{"run":3,"color":"yellow","id":"three"},
        {"run":4,"color":"blue","id":"four"},{"run":6,"color":"red","id":"six"},{"run":'ALL',"color":"grey","id":"all"}
    ];
    scores(runData);
    $('.scoreList').click((e)=>{
        e.preventDefault();
        let _Data = e.target.id;
        wagonWheelDisplay(_Data);
    })
    // PLAYER DISPLAY 
    $('.inningsOneCountry').click(()=>{
        $('.firstInningsPlayer').show();
        $('.secondInningsPlayer').hide();
    });
    $('.inningsTwoCountry').click(()=>{
        $('.firstInningsPlayer').hide();
        $('.secondInningsPlayer').show();
    });
})
const countryDisplay = (firstInnings,secondInnings) =>{
    document.getElementById('inningsOneCountry').innerHTML = firstInnings;
    document.getElementById('inningsTwoCountry').innerHTML = secondInnings;

}
const scores = (runData)=>{
    let cont = document.getElementById('footerContainer');
    let ul = document.createElement('ul');
        ul.setAttribute('style', 'padding-left:15%;width:100%;text-align:center;margin:auto');
        ul.setAttribute('class', 'scoreList');
    runData.map((data)=>{
        let li = document.createElement('li');
        li.innerHTML = data.run; 
        li.setAttribute('style', `display: inline-block;font-size: 40px;margin-left:15px; padding-left:40px; padding-right:40px;padding-top:10px;padding-bottom:10px; background-color:black; color:${data.color}; border-radius: 15px; border: 1px solid red;font-family: Arial, sans-serif;`);    
        li.setAttribute('id', `${data.id}`);
        ul.appendChild(li);     
    });
    cont.appendChild(ul);      
}
const wagonWheelDisplay = (data) => {
    console.log(data);
}
const playerDisplay = () => {
    console.log('ererer...');
    // alert('eerer....');
}
const teamsScore =() => {
   
}