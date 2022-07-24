document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value.toLowerCase()  //Functions require parenthesis at the end

  //Conditionals go here
if(day === "tuesday" || day === "thursday" ){
  document.querySelector('#placeToSee').innerText = "Class day!";
}else if(day === "saturday" || day === "sunday" ){
  document.querySelector('#placeToSee').innerText = "Weekend!";
}else{
  document.querySelector('#placeToSee').innerText = "BORING!";
  }
}