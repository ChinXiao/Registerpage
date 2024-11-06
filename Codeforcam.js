const btn = document.querySelector(".btn");
const btns = document.querySelector(".btns");
const btn2 = document.querySelector(".btn2");
const element = document.querySelector(".section");
btn.addEventListener("click", function () {

  if (element.style.display === "block") {
    element.style.display = "none";
  } else {
    element.style.display = "block";
    btn.style.display = "none";
  }
});
btn2.addEventListener("click",function(){
  
  if(btn.style.display==="none"){
    btn.style.display="block";
    element.style.display = "none";
    alert("your device has been hacked by KhengZin");
  }else{
    btn.style.display="none";
    element.style.display = "block";
  }
})
