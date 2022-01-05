const $hamburgerButton = document.querySelector("#hamburger-button");
const $navbar = document.querySelector("#navbar");

$hamburgerButton.addEventListener('click', ()=>{
  $navbar.classList.toggle("is-toggle");
  $navbar.classList.add("animate__animated")
  $navbar.classList.toggle("animate__fadeInDown")

});

window.addEventListener('resize', ()=>{
  let ancho = window.innerWidth;
  if(ancho >= 1024){
    // console.log("Click");
    $navbar.classList.remove("is-toggle");
  }
})