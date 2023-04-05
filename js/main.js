document.querySelector("#game").addEventListener("click", () => {
  const game = document.querySelector("#game")

  const x = Math.round(Math.random() * game.offsetWidth);


  const egg = new Image()

  egg.addEventListener("load", () => {
    egg.classList.add("egg");
    const x = Math.round(Math.random() * (game.offsetWidth - egg.width));
    egg.style.left = x + "px";
    game.appendChild(egg);
  });


  egg.src = "./Imagines/easteregg.png";

});
