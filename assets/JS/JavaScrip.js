
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  var navbarMenu = document.querySelector("ul");
  header.classList.toggle("sticky", window.scrollY > 200);
  navbarMenu.classList.toggle("sticky", window.scrollY > 200);
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector("ul");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

// let lastFrameTime = performance.now();
// let fpsCounter = 0;
// let fpsDisplay = document.getElementById("fps-display");
// let unlockBtn = document.getElementById("unlock-btn");
// let isUnlocked = false;

// // Function to track FPS
// function updateFPS(currentTime) {
//   fpsCounter++;
//   if (currentTime - lastFrameTime >= 1000) {
//     fpsDisplay.textContent = `FPS: ${fpsCounter}`;
//     fpsCounter = 0;
//     lastFrameTime = currentTime;
//   }
//   if (isUnlocked) {
//     requestAnimationFrame(updateFPS);
//   }
// }

// // Unlock FPS
// unlockBtn.addEventListener("click", () => {
//   isUnlocked = !isUnlocked;
//   unlockBtn.textContent = isUnlocked ? "Stop Unlock" : "Unlock FPS";
//   if (isUnlocked) {
//     requestAnimationFrame(updateFPS);
//   }
// });


// Kranjang kuning / pemesanan
   // Event listener untuk tombol pesan



    
