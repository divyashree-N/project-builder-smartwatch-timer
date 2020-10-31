var today= new Date();
var time=today.getHours()+":"+today.getMinutes();
document.getElementById('small').innerHTML=time;
document.getElementById('timemiddle').innerHTML=time;
console.log(time);

var days=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var dayNames=days[new Date().getDay()];
document.getElementById('day_name').innerHTML=dayNames;
console.log(dayNames);
 var smsbtn= document.getElementById('smsicon');
 var musicbtn= document.getElementById('musicicon');
 var timerbtn= document.getElementById('timericon');
 
 
 
 document.getElementById('smsicon').addEventListener("click",function (){
    document.getElementById('sms').style.display="block";
    musicbtn.style.color='rgb(65, 63, 63)';
    timerbtn.style.color='rgb(65, 63, 63)';
    document.getElementById('small').innerHTML='Home';
});

document.getElementById('small').addEventListener("click",function (){
    document.getElementById('small').innerHTML=time;
    document.getElementById('sms').style.display="none";
    musicbtn.style.color='white';
    timerbtn.style.color='white';

});


document.getElementById('musicicon').addEventListener("click",function (){
    document.getElementById('music').style.display="block";
    smsbtn.style.color='rgb(65, 63, 63)';
    timerbtn.style.color='rgb(65, 63, 63)';
    document.getElementById('small').innerHTML='Home';
});

document.getElementById('small').addEventListener("click",function (){
    document.getElementById('small').innerHTML=time;
    document.getElementById('music').style.display="none";
    smsbtn.style.color='white';
    timerbtn.style.color='white';

});


document.getElementById('timericon').addEventListener("click",function (){
    document.getElementById('stwatch').style.display="block";
    smsbtn.style.color='rgb(65, 63, 63)';
    musicbtn.style.color='rgb(65, 63, 63)';
    document.getElementById('small').innerHTML='Home';
});

document.getElementById('small').addEventListener("click",function (){
    document.getElementById('small').innerHTML=time;
    document.getElementById('stwatch').style.display="none";
    smsbtn.style.color='white';
    musicbtn.style.color='white';

});