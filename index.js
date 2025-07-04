const totalFrames = 304; // You have 109 images
let currentFrame = 1;
let imagesLoaded = 0;
const minimumLoadingTimeMs = 3000; // Minimum loading time of 3 seconds
let loadingStartTime;

// Preload all images before starting the animation
function preloadImages() {
  const progressBar = document.getElementById('progress');
  const loadingStatus = document.getElementById('loading-status');
  loadingStartTime = Date.now();
  
  console.log('=== LOADING STARTED ===');
  console.log(`Total frames to load: ${totalFrames}`);
  
  for (let i = 1; i <= totalFrames; i++) {
    const img = new Image();
    img.src = `/a-generative-graphic-novel-graphik_linda_kirsten_ivo/images2/${i}.png`;
    
    img.onload = function() {
      imagesLoaded++;
      const percent = Math.round((imagesLoaded / totalFrames) * 100);
      progressBar.style.width = percent + '%';
      loadingStatus.textContent = percent + '%';
      
      // Log every 10% progress or every 10 images
      if (imagesLoaded % 10 === 0 || percent % 10 === 0) {
        console.log(`Loading progress: ${percent}% (${imagesLoaded}/${totalFrames} images loaded)`);
      }
      
      if (imagesLoaded === totalFrames) {
        console.log('=== ALL IMAGES LOADED ===');
        console.log(`Total loading time: ${(Date.now() - loadingStartTime) / 1000} seconds`);
        finishLoading();
      }
    };
    
    img.onerror = function() {
      console.error(`Failed to load image: ${i}.png`);
      imagesLoaded++;
      const percent = Math.round((imagesLoaded / totalFrames) * 100);
      progressBar.style.width = percent + '%';
      loadingStatus.textContent = percent + '%';
      
      if (imagesLoaded === totalFrames) {
        console.log('=== ALL IMAGES PROCESSED (with errors) ===');
        console.log(`Total loading time: ${(Date.now() - loadingStartTime) / 1000} seconds`);
        finishLoading();
      }
    };
  }
}

// Finish loading after minimum time has passed
function finishLoading() {
  const loadingElapsed = Date.now() - loadingStartTime;
  const remainingTime = Math.max(0, minimumLoadingTimeMs - loadingElapsed);
  
  console.log(`Waiting additional ${remainingTime/1000} seconds to meet minimum loading time`);
  
  // Wait for minimum loading time before hiding the loading screen
  setTimeout(() => {
    console.log('=== STARTING ANIMATION ===');
    document.getElementById('loading-screen').style.display = 'none';
    startAnimation();
  }, remainingTime);
}

// Start the original animation
function startAnimation() {
  // Initialize with the first frame
  document.getElementById("stopMotion").src = `/a-generative-graphic-novel-graphik_linda_kirsten_ivo/images2/1.png`;
  // Start the animation interval
  setInterval(updateFrame, 90);
}

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
  
  // Only log every 10th frame to avoid console spam
  if (currentFrame % 10 === 0) {
    console.log(`Playing frame: ${currentFrame}`);
  }
}

// Start preloading when document is ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('Document ready, starting preload...');
  preloadImages();
});

// Original setInterval has been moved to startAnimation function

