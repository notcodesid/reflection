const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Create the canvas (1200x630 is the standard size for OG images)
const width = 1200;
const height = 630;
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Background color (light cream color from your CSS)
ctx.fillStyle = 'hsl(60, 30%, 98%)';
ctx.fillRect(0, 0, width, height);

// Center of the canvas
const centerX = width / 2;
const centerY = height / 2;

// Text color (from your CSS)
ctx.fillStyle = 'hsl(144, 13%, 20%)';

// Draw the empty circle
const circle1X = centerX - 140;
const circleY = centerY - 20;
const circleRadius = 24;
ctx.beginPath();
ctx.arc(circle1X, circleY, circleRadius, 0, Math.PI * 2);
ctx.strokeStyle = 'hsl(144, 13%, 20%)';
ctx.lineWidth = 2;
ctx.stroke();

// Draw the filled circle
const circle2X = circle1X + circleRadius * 2 + 10;
ctx.beginPath();
ctx.arc(circle2X, circleY, circleRadius, 0, Math.PI * 2);
ctx.fill();

// Draw the "reflection" text
ctx.font = '72px serif';
ctx.textAlign = 'left';
ctx.textBaseline = 'middle';
ctx.fillText('reflection', circle2X + 40, circleY);

// Draw the tagline
ctx.font = '40px serif';
ctx.fillStyle = '#555';
ctx.textAlign = 'center';
ctx.fillText('thoughts on life, tech, and growth.', centerX, centerY + 80);

// Save the image
const buffer = canvas.toBuffer('image/png');
const publicDir = path.join(__dirname, '..', 'public');

// Create public directory if it doesn't exist
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

fs.writeFileSync(path.join(publicDir, 'opengraph-image.png'), buffer);
console.log('OG Image generated: public/opengraph-image.png'); 