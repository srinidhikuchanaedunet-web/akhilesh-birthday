
// ===================================
// AKHILESH.EXE - BIRTHDAY EXPERIENCE
// ===================================

const screens = [
  "startup",
  "welcome",
  "cakeScreen",
  "celebration",
  "unlock",
  "bouquet",
  "videoScreen"
];


// SCREEN NAVIGATION

function showScreen(id) {

  screens.forEach(screen => {
    document.getElementById(screen)
      .classList.add("hidden");
  });

  const target = document.getElementById(id);

  target.classList.remove("hidden");

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });

}


// ===================================
// 1. STARTUP LOADING ANIMATION
// ===================================

let progress = 0;

const loading = setInterval(() => {

  progress += 2;

  document.getElementById("progressBar")
    .style.width = progress + "%";

  document.getElementById("progressText")
    .textContent = progress + "%";

  if (progress >= 100) {

    clearInterval(loading);

    document.getElementById("loadingMessage")
      .textContent = "Birthday surprise ready! ♡";

    setTimeout(() => {
      showScreen("welcome");
    }, 1000);

  }

}, 50);


// ===================================
// 2. WELCOME SCREEN
// ===================================

function showCake() {
  showScreen("cakeScreen");
}


// ===================================
// 3. COUNTDOWN BEFORE BLOWING
// ===================================

let candlesBlown = false;

function startBlowCountdown() {

  if (candlesBlown) return;

  const button = document.getElementById("blowButton");

  button.disabled = true;

  document.getElementById("cakeMessage")
    .textContent = "Get ready to blow! 💨";

  const countdown = document.getElementById("blowCountdown");

  const number = document.getElementById("countNumber");

  countdown.classList.remove("hidden");

  let count = 3;

  number.textContent = count;

  const timer = setInterval(() => {

    count--;

    if (count > 0) {

      number.textContent = count;

    } else {

      clearInterval(timer);

      number.textContent = "BLOW!!! 💨";

      setTimeout(() => {
        blowAllCandles();
      }, 600);

    }

  }, 1000);

}


// ===================================
// 4. BLOW OUT ALL CANDLES
// ===================================

function blowAllCandles() {

  candlesBlown = true;

  document.querySelector(".cake-scene")
    .classList.add("blown");

  document.getElementById("cakeMessage")
    .textContent = "WISH MADE! 💗";

  setTimeout(() => {

    document.getElementById("blowCountdown")
      .classList.add("hidden");

    showScreen("celebration");

    launchParty();

  }, 1800);

}


// ===================================
// 5. BALLOON CELEBRATION
// ===================================

function launchParty() {

  const party = document.getElementById("party");

  party.innerHTML = "";

  const decorations = [
    "🎈", "🎈", "🎈", "🎊",
    "🎉", "💗", "✨", "🌸", "🎀"
  ];

  for (let i = 0; i < 70; i++) {

    const item = document.createElement("span");

    item.className = "balloon";

    item.textContent =
      decorations[
        Math.floor(Math.random() * decorations.length)
      ];

    item.style.left = Math.random() * 100 + "%";

    item.style.animationDelay =
      Math.random() * 2 + "s";

    item.style.animationDuration =
      (3 + Math.random() * 3) + "s";

    party.appendChild(item);

  }

}


// ===================================
// 6. UNLOCK GIFT
// ===================================

function unlockGift() {

  showScreen("unlock");

}


// ===================================
// 7. ANIMATED BOUQUET
// ===================================

function showBouquet() {

  showScreen("bouquet");

  // Restart flower animations each time
  const flowers = document.querySelectorAll(".flower");

  flowers.forEach(flower => {

    flower.style.animation = "none";

    void flower.offsetWidth;

    flower.style.animation = "";

  });

}


// ===================================
// 8. PERSONAL VIDEO
// ===================================

function showVideo() {

  showScreen("videoScreen");

}


async function playBirthdayVideo() {

  const video = document.getElementById("birthdayVideo");

  document.getElementById("videoPlaceholder")
    .classList.add("hidden");

  document.getElementById("videoContainer")
    .classList.remove("hidden");

  try {

    await video.play();

  } catch (error) {

    console.log("Press the video play button to start.");

  }

}
