// Dark mode
const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", ()=>{
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Typing animation
const text = ["Web Developer","UI Designer","Web Enthusiast"];
let i=0,j=0,currentText="",isDeleting=false;
function type(){
  currentText = text[i];
  document.getElementById("typing").innerHTML = currentText.substring(0,j);
  if(!isDeleting && j++ === currentText.length){isDeleting=true;setTimeout(type,1500);return;}
  if(isDeleting && j-- === 0){isDeleting=false;i=(i+1)%text.length;}
  setTimeout(type,isDeleting?80:150);
}
type();

// Scroll reveal
const reveals=document.querySelectorAll("[data-reveal]");
window.addEventListener("scroll",()=>{
  reveals.forEach(el=>{
    const rect=el.getBoundingClientRect();
    if(rect.top<window.innerHeight-100) el.classList.add("active");
  });
  document.getElementById("topBtn").style.display = window.scrollY>200?"flex":"none";
});

// Back to top
function scrollToTop(){window.scrollTo({top:0,behavior:"smooth"});}
