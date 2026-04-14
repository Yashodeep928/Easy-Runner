
let coinEl;
let scoreEl;


export function initCoinAndScore(coinElement, scoreElement) {
  coinEl = coinElement;
  scoreEl = scoreElement;
  placeCoin();
}


export function placeCoin() {
  const randomLeft = Math.floor(Math.random() * 656);
  const randomBottom = Math.floor(Math.random() * (500 - 353 + 1)) + 353;

  coinEl.style.left = randomLeft + "px";
  coinEl.style.bottom = randomBottom + "px";
  coinEl.style.display = "block";
}


export function checkCoinCollision(playerEl) {
  if (!coinEl || !playerEl) return false; // ✅ prevents crash

  if (coinEl.style.display === "none") return false;

  const p = playerEl.getBoundingClientRect();
  const c = coinEl.getBoundingClientRect();

  return (
    p.left < c.right &&
    p.right > c.left &&
    p.top < c.bottom &&
    p.bottom > c.top
  );
}

export function collectCoin() {
  const score = Number(scoreEl.innerText);
  scoreEl.innerText = score + 1;

  coinEl.style.display = "none";

  setTimeout(() => {
    placeCoin(); // ⏳ delay respawn
  }, 5000);
}