import { accessPlatform, createPlatform } from './platform.js';
import { startJump, initJumpSystem, updateJump, isInAir } from './jump.js';
import {
  initCoinAndScore,
  checkCoinCollision,
  collectCoin
} from "./scoreCoin.js";
const pikachu = document.getElementById("pikachu")
let x = 0;
let direction = 0;
let gameOver = false;
accessPlatform();
createPlatform();

initJumpSystem(0);       // pass base ground
startJump(false);        // pass gameOver status


function animate() {

  // COIN COLLISION
  if (checkCoinCollision(pikachu)) {
    collectCoin();
  }

  // HORIZONTAL MOVE
  x += direction * 5;
  x = Math.max(0, Math.min(x, maxX));
  pikachu.style.left = x + "px";

  tooltip.style.display = x === 0 ? "block" : "none";

  // PLATFORM DETECTION
  const activeGround = getGroundLevel(x, boxWidth, isInAir());

  // JUMP / FALL UPDATE
  const result = updateJump(activeGround);

  if (result.dead) {
    pikachu.style.display = "none";
    gameOver = true;
    return;
  }

  pikachu.style.bottom = result.groundLevel + "px";

  requestAnimationFrame(animate);
}

animate();

window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    startJump(false);
  }
   if (e.key === "ArrowRight") {
      direction = 1;
      pikachu.style.transform = "scaleX(1)";
    }
  
    if (e.key === "ArrowLeft") {
      direction = -1;
      pikachu.style.transform = "scaleX(-1)";
    }
  
    if (e.key === "ArrowUp") {
      startJump(gameOver);
    }
});
