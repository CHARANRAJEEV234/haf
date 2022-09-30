// function player()
// {
//     let x = document.getElementById("pwd").value;
//     if(x==123)
//     {
//         document.getElementById('demo').innerHTML='<audio src="https://node-03.zeno.fm/sepgm12xuxhvv?zs=HHwoce8ITSSUpjpy3w9c9g&amp;rj-ttl=5&amp;rj-tok=AAABgizv1XYA0MqBOQHBDTqTig" type="audio/mpeg" controls></audio>'
//         document.getElementById("pwd").remove();
//         document.getElementById("btn").remove();
//     }
//     else{
//         window.alert("you have no permision");
//     }
// }

var countDownDate = new Date("oct 1,2022 02:33:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate-now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("days").innerHTML=days;
    document.getElementById("hours").innerHTML=hours;
    document.getElementById("minutes").innerHTML=minutes;
    document.getElementById("seconds").innerHTML=seconds;

  if(distance<=0){
    clearInterval(x);
   var c =document.getElementById('demo').innerHTML='<iframe width="100%" height="315" src="https://www.youtube.com/embed/dq-W7cLAuFU"></iframe>';
    
  
    document.getElementById('info').innerText="Today Radio Off It will opens on tommarow"

                                                                                                                                                                             
  }


},1000);
