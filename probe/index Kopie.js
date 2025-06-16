const totalFrames = 30;
let currentFrame = 1;

function updateFrame() {
  currentFrame++;
  if (currentFrame > totalFrames) currentFrame = 1;

  const frameNumber = String(currentFrame).padStart(2, '0');
  document.getElementById("stopMotion").src = `frames/frame${frameNumber}.png`;
}

setInterval(updateFrame, 100); // 100ms = 10 FPS

