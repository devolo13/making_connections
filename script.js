function changeUser(element){
  document.getElementById("userName").innerText="Spongebob Squarepants";
}

function connectionButtons(element, accept){
  document.getElementById(element).style.visibility = "hidden";
  connectionCounter.innerText--;
  if (accept===true){
    console.log('true');
    yourConnections.innerText++;
  }
}