// ==========================================
// LOVE COUNTER
// ==========================================

const startDate =
  new Date("2024-10-18T00:00:00");


function updateCounter(){

  const now = new Date();

  let difference =
    Math.max(0, now - startDate);


  const days =
    Math.floor(
      difference / 86400000
    );

  difference %= 86400000;


  const hours =
    Math.floor(
      difference / 3600000
    );

  difference %= 3600000;


  const minutes =
    Math.floor(
      difference / 60000
    );

  difference %= 60000;


  const seconds =
    Math.floor(
      difference / 1000
    );


  document.getElementById("days")
    .textContent =
    days.toLocaleString();


  document.getElementById("hours")
    .textContent =
    String(hours).padStart(2,"0");


  document.getElementById("minutes")
    .textContent =
    String(minutes).padStart(2,"0");


  document.getElementById("seconds")
    .textContent =
    String(seconds).padStart(2,"0");

}


updateCounter();

setInterval(
  updateCounter,
  1000
);



// ==========================================
// MUSIC
// ==========================================

const music =
  document.getElementById("music");

const musicBtn =
  document.getElementById("musicBtn");


musicBtn.addEventListener(
  "click",
  async function(){

    if(music.paused){

      try{

        await music.play();

        musicBtn.textContent = "Ⅱ";

      }

      catch(error){

        alert(
          "Put your song inside music/ and name it our-song.mp3"
        );

      }

    }

    else{

      music.pause();

      musicBtn.textContent = "♫";

    }

  }
);



// ==========================================
// LOVE BUTTON
// ==========================================

const loveBtn =
  document.getElementById("loveBtn");

const loveMessage =
  document.getElementById("loveMessage");


loveBtn.addEventListener(
  "click",
  function(){

    loveMessage.classList.add("show");

    createHearts(20);

  }
);



// ==========================================
// FLOATING HEARTS
// ==========================================

function createHearts(number){

  const container =
    document.getElementById("hearts");


  for(
    let i = 0;
    i < number;
    i++
  ){

    const heart =
      document.createElement("span");


    heart.className =
      "float-heart";


    heart.textContent =
      Math.random() > .3
      ? "♥"
      : "♡";


    heart.style.left =
      Math.random() * 100 + "%";


    heart.style.fontSize =
      12 + Math.random() * 25 + "px";


    heart.style.animationDuration =
      2 + Math.random() * 3 + "s";


    container.appendChild(heart);


    setTimeout(
      () => heart.remove(),
      5000
    );

  }

}



// small random hearts

setInterval(
  function(){

    if(Math.random() > .55){

      createHearts(1);

    }

  },
  1500
);
