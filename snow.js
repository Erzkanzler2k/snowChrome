const canvas = document.createElement('canvas');
canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.pointerEvents = 'none';
canvas.style.zIndex = '1000';
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

const numSnowflakes = 50;
const snowflakes = [];

function createSnowflake() {
  return {
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    size: Math.random() * 2 + 1,
    speed: Math.random() * 2 + 1,
    opacity: Math.random() * 0.5 + 0.5
  };
}

for (let i = 0; i < numSnowflakes; i++) {
  snowflakes.push(createSnowflake());
}

function drawSnowflake(snowflake) {
  ctx.beginPath();
  ctx.arc(snowflake.x, snowflake.y, snowflake.size, 0, 2 * Math.PI);
  ctx.fillStyle = `rgba(255, 255, 255, ${snowflake.opacity})`;
  ctx.fill();
}

function animateSnow() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  snowflakes.forEach(snowflake => {
    snowflake.y += snowflake.speed;
    if (snowflake.y > window.innerHeight) {
      snowflake.y = 0; // Появление сверху
      snowflake.x = Math.random() * window.innerWidth;
    }
    drawSnowflake(snowflake);
  });
  requestAnimationFrame(animateSnow);
}

animateSnow();
