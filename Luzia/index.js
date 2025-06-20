const totalFrames = 20; // You have 5 images
let currentFrame = 1;

function updateFrame() {
  currentFrame++;
  if (currentFrame > totalFrames) currentFrame = 1;

  // Use your specific image path pattern
  document.getElementById("stopMotion").src = `/a-generative-graphic-novel-graphik_linda_kirsten_ivo/images_luzia/${currentFrame}.png`;
}

setInterval(updateFrame, 150); // 300ms = slower animation (adjust as needed)

