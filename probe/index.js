const totalFrames = 6; // You have 5 images
let currentFrame = 1;

function updateFrame() {
  currentFrame++;
  if (currentFrame > totalFrames) currentFrame = 1;

  // Use your specific image path pattern
  document.getElementById("stopMotion").src = `/a-generative-graphic-novel-graphik_linda_kirsten_ivo/images/${currentFrame}.png`;
}

setInterval(updateFrame, 50); // 300ms = slower animation (adjust as needed)

