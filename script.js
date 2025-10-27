const lengthInput=document.getElementById("length");
const output=document.getElementById("output");
const btn=document.getElementById("generate");

function generatePassword(len){
  const chars="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()";
  let pass="";
  for(let i=0;i<len;i++) pass+=chars[Math.floor(Math.random()*chars.length)];
  return pass;
}

btn.onclick=()=>{output.value=generatePassword(lengthInput.value||12);}
