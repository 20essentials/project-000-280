const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

let $width = (canvas.width = document.documentElement.scrollWidth);
let $height = (canvas.height = document.documentElement.scrollHeight);

const resizeCanvas = () => {
  $width = canvas.width = document.documentElement.scrollWidth;
  $height = canvas.height = document.documentElement.scrollHeight;
};

const generateRandomColor = () =>
  `rgba(${[...Array(3)].map(n => Math.floor(Math.random() * 100 + 155))},0.8)`;

const drawCanvas = (x, y, color, size, angle) => {
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(angle);
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.quadraticCurveTo(size / 2, -size, size, 0);
  ctx.quadraticCurveTo(size / 2, size, 0, 0);
  ctx.stroke();
  ctx.closePath();
  ctx.restore();
};

const drawMessage = () => {
  ctx.beginPath();
  ctx.font = '20px Arial';
  ctx.fillStyle = '#0f0';
  ctx.fillText('Click to make a Senik', $width - 250, $height - 30);
  ctx.closePath();
};

document.addEventListener('click', e => {
  const x = e.clientX;
  const y = e.clientY;
  const color = generateRandomColor();
  const petalSize = Math.floor(Math.random() * 50) + 20;
  const numberOfPetal = Math.floor(Math.random() * 50) + 20;
  for (let petal = 0; petal < numberOfPetal; petal++) {
    const angle = petal * ((Math.PI * 2) / numberOfPetal);
    drawCanvas(x, y, color, petalSize, angle);
  }
});

document.addEventListener('DOMContentLoaded', () => {
  resizeCanvas();
  drawMessage();

  window.addEventListener('resize', () => {
    resizeCanvas();
    drawMessage();
  });
});
