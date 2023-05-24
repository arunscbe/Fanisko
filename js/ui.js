$(document).ready(function(){
    $.ajax({
        url: "https://d1u2maujpzk42.cloudfront.net/matchdata/1198/players.json",
        type: 'GET',
        success: function(res) {
            const _resData = res;
            console.log(_resData);  
            countryDisplay(_resData);  
            playerDisplay(_resData);       
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
const countryDisplay = (_resData) =>{
    document.getElementById('inningsOneCountry').innerHTML = _resData.first_innings_shortcode;
    document.getElementById('inningsTwoCountry').innerHTML = _resData.second_innings_shortcode;
}
const playerDisplay = (_resData) => {
    const _firstInnPlayer = _resData.first_innings_players;
    const _secondInnPlayer = _resData.second_innings_players;
    const playerFirstInn = document.getElementById('firstInningsPlayer');
    const playerSecondInn = document.getElementById('secondInningsPlayer');
    addPlayer(_firstInnPlayer,playerFirstInn);
    addPlayer(_secondInnPlayer,playerSecondInn);
}
const addPlayer = (data,divId) => {
    data.map((players)=>{
        let p = document.createElement('p');
        p.innerHTML = players.player_name;
        p.setAttribute('id', `${players.playerid}`);   
        divId.appendChild(p);       
    })  
}
const scores = (runData)=>{
    let cont = document.getElementById('footerContainer');
    let ul = document.createElement('ul');
        ul.setAttribute('style', 'width:100%;text-align:center;float:left');
        ul.setAttribute('class', 'scoreList');
    runData.map((data)=>{
        let li = document.createElement('li');
        li.innerHTML = data.run; 
        li.setAttribute('style', `display: inline-block;font-size: 10px;margin-left:10px; padding-left:10px; padding-right:10px;padding-top:10px;padding-bottom:10px; background-color:black; color:${data.color}; border-radius: 10px; border: 1px solid red;font-family: Arial, sans-serif;`);    
        li.setAttribute('id', `${data.id}`);
        ul.appendChild(li);     
    });
    cont.appendChild(ul);      
}
const wagonWheelDisplay = (data) => {
    console.log(data);
}

const teamsScore =() => {
   
}