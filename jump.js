let velocity  = 0;
let gravity = 0.7;
let jumpForce = 15;
let isJumping = false;
let isFalling = false;
let groundLevel = 0;
let baseGround = 0;

export function initJumpSystem(baseGroundLevel) {
  groundLevel = baseGroundLevel;
  baseGround = baseGroundLevel;
}

export function startJump(gameOver) {
  if (gameOver) return;
  if (isJumping || isFalling) return;

  isJumping = true;
  velocity = jumpForce;
}


export function updateJump(activeGround) {

  // FALL START
  if (activeGround === null && !isJumping) {
    isFalling = true;
  }

  // LANDED ON PLATFORM
  if (activeGround !== null && !isJumping && !isFalling) {
    groundLevel = activeGround;
    velocity = 0;
  }

  // JUMPING
  if (isJumping) {
    velocity -= gravity;
    groundLevel += velocity;

    if (groundLevel <= baseGround) {
      groundLevel = baseGround;
      isJumping = false;
      velocity = 0;
    }
  }

  // FALLING
  if (isFalling) {
    velocity -= gravity;
    groundLevel += velocity;

    if (groundLevel <= 0) {
      groundLevel = 0;
      isFalling = false;
      velocity = 0;
      return { dead: true };
    }
  }

  return { groundLevel, dead: false };
}


export function isInAir() {
  return isJumping || isFalling;
}
