const fs = require('fs');
const path = require('path');

// Create a simple SVG icon
const svgIcon = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6366f1;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#3730a3;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect x="0" y="0" width="512" height="512" rx="77" fill="url(#gradient)"/>
  <text x="256" y="280" font-family="system-ui, -apple-system, sans-serif" font-size="280" font-weight="bold" fill="white" text-anchor="middle">P</text>
</svg>
`;

// Save the SVG for different sizes
const sizes = [
  { name: 'icon-512.svg', size: 512 },
  { name: 'icon-192.svg', size: 192 },
];

const publicDir = path.join(__dirname, '..', 'public');

sizes.forEach(({ name, size }) => {
  const scaledSvg = svgIcon.replace('width="512" height="512"', `width="${size}" height="${size}"`);
  fs.writeFileSync(path.join(publicDir, name), scaledSvg);
  console.log(`Created ${name}`);
});

// Also create a simple favicon.ico placeholder (as text file for now)
const faviconPlaceholder = `This is a placeholder for favicon.ico. 
To generate a proper .ico file, use an online converter with the SVG files, 
or open generate-icons.html in a browser and download the generated icons.`;

fs.writeFileSync(path.join(publicDir, 'favicon.ico'), faviconPlaceholder);
console.log('Created favicon.ico placeholder');

// Update the existing apple-touch-icon.svg to match our design
fs.writeFileSync(path.join(publicDir, 'apple-touch-icon.svg'), svgIcon.replace('512', '180'));
console.log('Updated apple-touch-icon.svg');

console.log('\nAll icon files created successfully!');
console.log('For PNG versions, open /public/generate-icons.html in your browser.');