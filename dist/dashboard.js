let prevbtn= document.querySelector('.prevbtn');
let onebtn = document.querySelector('.onebtn');
let twobtn = document.querySelector('.twobtn');
let threebtn = document.querySelector('.threebtn');
let nextbtn= document.querySelector('.nextbtn');
let btntick = document.querySelector('.btntick');
let btncross = document.querySelector('.btncross');

prevbtn.addEventListener("click",()=>{
  prevbtn.style.backgroundColor = '#3c30c7';
  onebtn.style.backgroundColor = '#a0beeb';
  twobtn.style.backgroundColor = '#a0beeb';
  threebtn.style.backgroundColor = '#a0beeb';
  nextbtn.style.backgroundColor = '#a0beeb';
});

onebtn.addEventListener("click",()=>{
  prevbtn.style.backgroundColor = '#a0beeb';
  onebtn.style.backgroundColor = '#3c30c7';
  twobtn.style.backgroundColor = '#a0beeb';
  threebtn.style.backgroundColor = '#a0beeb';
  nextbtn.style.backgroundColor = '#a0beeb';
  
});

twobtn.addEventListener("click",()=>{
  
  prevbtn.style.backgroundColor = '#a0beeb';
  onebtn.style.backgroundColor = '#a0beeb';
  twobtn.style.backgroundColor = '#3c30c7';
  threebtn.style.backgroundColor = '#a0beeb';
  nextbtn.style.backgroundColor = '#a0beeb';
  
});

threebtn.addEventListener("click",()=>{
  
  prevbtn.style.backgroundColor = '#a0beeb';
  onebtn.style.backgroundColor = '#a0beeb';
  twobtn.style.backgroundColor = '#a0beeb';
  threebtn.style.backgroundColor = '#3c30c7';
  nextbtn.style.backgroundColor = '#a0beeb';
});

nextbtn.addEventListener("click", ()=>{
  
  prevbtn.style.backgroundColor = '#a0beeb';
  onebtn.style.backgroundColor = '#a0beeb';
  twobtn.style.backgroundColor = '#a0beeb';
  threebtn.style.backgroundColor = '#a0beeb';
  nextbtn.style.backgroundColor = '#3c30c7';
  
});
btntick.addEventListener("click",()=>{
  
  btntick.style.backgroundColor = '#3c30c7';
  btncross.style.backgroundColor = '#a0beeb';
  
});
btncross.addEventListener("click",()=>{
  btncross.style.backgroundColor = '#3c30c7';
  btntick.style.backgroundColor = '#a0beeb';
  
});
