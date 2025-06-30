const totalFrames = 146; // You have 109 images
let currentFrame = 1;



function updateFrame() {
  currentFrame++;
  if (currentFrame > totalFrames) currentFrame = 1;

  // Create the image path
  const imagePath = `/a-generative-graphic-novel-graphik_linda_kirsten_ivo/images2/${currentFrame}.png`;
  const imageElement = document.getElementById("stopMotion");
  
  // Add error handling for image loading
  imageElement.onerror = function() {
    console.error(`Failed to load image: ${imagePath}`);
    // Skip to next frame if this one fails
    currentFrame++;
    if (currentFrame > totalFrames) currentFrame = 1;
    this.src = `/a-generative-graphic-novel-graphik_linda_kirsten_ivo/images2/${currentFrame}.png`;
  };
  
  // Set the new image source
  imageElement.src = imagePath;
  
  // Debug output (can be removed after debugging)
  console.log(`Loading frame: ${currentFrame}`);
}

// Initialize with the first frame
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById("stopMotion").src = `/a-generative-graphic-novel-graphik_linda_kirsten_ivo/images2/1.png`;
});

setInterval(updateFrame, 90); // 70ms between frames

