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
//}
// var show = document.getElementById('dateShow').innerText;
// console.log(show)



var arrayOfWeekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
var dateObj = new Date()
var weekdayNumber = dateObj.getDay()
var weekdayName = arrayOfWeekdays[weekdayNumber]
console.log(weekdayName)
if(weekdayName=="Sunday"){
  var today = new Date();
   var day=`${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()} 11:30:00`
   console.log(day);
var countDownDate = new Date(day).getTime();
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
    document.getElementById("dateShow").innerHTML=`0${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()} 11:30:00`;
//   if(distance<=0){
//     clearInterval(x);
//    var c =document.getElementById('demo').innerHTML='<iframe width="100%" height="315" src="https://www.youtube.com/embed/dq-W7cLAuFU"></iframe>';
//     document.getElementById('info').innerText="Today Radio Off It will opens on tommarow 12:00 AM"
//   }


},1000);
}

// if(weekdayName!="Sunday")
else
{
  console.log("me")
  function nextDate(dayIndex){
  var today = new Date();
 today.setDate(today.getDate()+(dayIndex-1-today.getDay()+7)%7+1);
 return today;
}
  
var sundayDt=nextDate(0).toLocaleString();
var nextsun = `${sundayDt.slice(0,10)} 11:30:00`
console.log(nextsun);
  var countDownDate = new Date(nextsun).getTime();
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
    if(parseInt(nextsun.substring(3,5))<10){
      console.log(parseInt(nextsun.substring(3,5)))
    document.getElementById("dateShow").innerHTML=`${nextsun.substring(3,4)}/${nextsun.substring(0,2)}/${nextsun.substring(5,9)}`;
    }
    if(parseInt(nextsun.substring(3,5))>=10){
      console.log(parseInt(nextsun.substring(3,5)))
    document.getElementById("dateShow").innerHTML=`${nextsun.substring(3,5)}/${nextsun.substring(0,2)}/${nextsun.substring(6,10)}`;
    }
//   if(distance<=0){
//     clearInterval(x);
//    var c =document.getElementById('demo').innerHTML='<iframe width="100%" height="315" src="https://www.youtube.com/embed/dq-W7cLAuFU"></iframe>';
    
  
//     document.getElementById('info').innerText="Today Radio Off It will opens on tommarow"

                                                                                                                                                                                


//   }


},1000);
}


// var countDownDate = new Date("oct 1,2022 01:28:00").getTime();
// var x = setInterval(function(){
//     var now = new Date().getTime();
//     var distance = countDownDate-now;

//     var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    

//   if(distance<=0){
//     clearInterval(x);
//     document.getElementById('demo').remove()
//     document.getElementById('info').remove();

                                                                                                                                                                                

//     document.getElementsById("timer").remove();

//   }


// },1000);





