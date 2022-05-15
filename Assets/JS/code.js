function result (){
  var score=0;
  if (document.getElementById("correct1").checked){
    score+=20;
  }
  if (document.getElementById("correct2a").checked){
    score+=5;
  }
  if (document.getElementById("correct2b").checked){
    score+=5;
  }
  if (document.getElementById("correct2c").checked){
    score+=5;
  }
  if (document.getElementById("correct2d").checked){
    score+=5;
  }
  if (document.getElementById("correct3").checked){
    score+=20;
  }
  if (document.getElementById("correct4").checked){
    score+=20;
  }
  if (document.getElementById("correct5").checked){
    score+=20;
  }
  document.write("Your Score is: " + score)
}

// function next(){
//   window.location = "Assets/Pages/Index.html"
// }