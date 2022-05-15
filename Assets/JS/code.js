var score=0;
function result (){
  
  if (document.getElementById("correct1").checked){
    score+=10;
  }
  if (document.getElementById("correct2a").checked){
    score+=2.5;
  }
  if (document.getElementById("correct2b").checked){
    score+=2.5;
  }
  if (document.getElementById("correct2c").checked){
    score+=2.5;
  }
  if (document.getElementById("correct2d").checked){
    score+=2.5;
  }
  if (document.getElementById("correct3").checked){
    score+=10;
  }
  if (document.getElementById("correct4").checked){
    score+=10;
  }
  if (document.getElementById("correct5").checked){
    score+=10;
  }
  var total = (score/50)*100;
  document.write("Your Score is: " + total + "%")
}


// function next(){
//   window.location = "Assets/Pages/Index.html"
// }