var motdepasse1 = document.querySelector("#password");
var motdepasse2 = document.querySelector("#confirmPassword");

function chekPassword(mdp1, mdp2)
{
  if (mdp1 == mdp2)
  {
    return true;
  }
  else
  {
    return false;
  }
}
function changeBorder()
 {

  if(chekPassword(motdepasse1.value, motdepasse2.value))
  {
    motdepasse1.style.border = "2px solid green";
    motdepasse2.style.border = "2px solid green";
  }
  else {
    motdepasse1.style.border = "2px solid red";
    motdepasse2.style.border = "2px solid red";
  }
}










// function inputBorder() {
//   var pass = document.getElementById('password');
//   var confPass = document.getElementById('confirmPassword');
//   if(pass.value == confPass.value) {
//     confPass.style.border = '3px solid green';
//     pass.style.border = '3px solid green';
//   }
//   else if(pass.value != confPass.value){
//     confPass.style.border = '3px solid red';
//     pass.style.border = '3px solid red';
//   }
// }
