document.querySelector("#game").addEventListener("click", () => {
  const game = document.querySelector("#game")

  const x = Math.round(Math.random() * game.offsetWidth);


  const egg = new Image();


  setInterval(() =>{

  }, 30 / 1000)


  egg.addEventListener("load", () => {
    egg.classList.add("egg");
    const x = Math.round(Math.random() * (120 - (5 * egg.width) / egg.height));
    egg.style.left = x + "vh";
    console.log(egg.width / game.offsetWidth);
    game.appendChild(egg);
  });

  egg.src = "./Imagines/easteregg.png";
}, 1000);

setInterval(() =>{
  document.querySelectorAll("#game > .egg").forEach(element => {
    const top  = element.style.top.length !== 0? parseFloat(element.style.top) : 0;
    console.log(top);
    element.style.top = (top + 0.3) + "vh";

    if(top > 100)
    {
      element.remove();
    }

  })
}, 30 / 1000)
