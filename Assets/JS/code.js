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
  if (total >= 80){
    document.getElementById("results").innerText = total + "%." + " Congratulations, your knowledge of JS is INCREDIBLE!"
  }
  else if (total < 80 && total >= 50){
    document.getElementById("results").innerText = total + "%." + " Not so bad, GOOD JOB!"
  }
  else {
    document.getElementById("results").innerText = total + "%" + "You can do better. TRY AGAIN"
  }

}
