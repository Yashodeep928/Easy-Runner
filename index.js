import { accessPlatform, createPlatform } from './platform.js';
import { startJump, initJumpSystem, updateJump, isInAir } from './jump.js';

accessPlatform();
createPlatform();

initJumpSystem(0);       // pass base ground
startJump(false);        // pass gameOver status

const result = updateJump(null);  // null means no platform below
console.log(result);

console.log(isInAir());