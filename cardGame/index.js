card = document.querySelectorAll(".card")
card2 = document.getElementsByClassName("card")
console.log(card)
console.log(card2)
firstcard = null;
secondcard =null;

card.forEach(element => {
  element.addEventListener("click",flip)
});

function flip(){
  if(!firstcard){
    this.classList.toggle("flip")
    firstcard=this
  }
  else if (!secondcard){
    this.classList.toggle("flip")
    if(this != firstcard) {
      secondcard=this;
      check()
    }
  }
  else {
    console.log("No Cheat")
  }
}

function check(){
  if(firstcard.getAttribute('data-image')===secondcard.getAttribute('data-image')){
    firstcard.removeEventListener("click",flip)
    secondcard.removeEventListener("click",flip)
    reset()
  }
  else{
    setTimeout(()=>{
      firstcard.classList.toggle("flip")
      secondcard.classList.toggle("flip")
      reset()
    },500)
  }
}

function reset(){
  firstcard = null;
  secondcard =null;
}


function shuffle(){
  card.forEach((c)=>{
    const index = Math.floor(Math.random()*16) ;
    c.style.order = index;
  })
}


window.addEventListener("load",shuffle)