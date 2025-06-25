const fs = require('fs');
const path = require('path');

// Create a simple SVG placeholder generator
function createSVGPlaceholder(name, width = 400, height = 400) {
  const initials = name.split(' ').map(n => n[0]).join('').toUpperCase();
  const colors = ['#3B82F6', '#8B5CF6', '#EF4444', '#10B981', '#F59E0B'];
  const bgColor = colors[Math.floor(Math.random() * colors.length)];
  
  return `<svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="${bgColor}"/>
    <text x="50%" y="50%" font-family="Arial, sans-serif" font-size="${Math.min(width, height) * 0.2}" 
          fill="white" text-anchor="middle" dominant-baseline="middle" font-weight="bold">
      ${initials}
    </text>
  </svg>`;
}

// Generate placeholders for team members
const teamMembers = [
  'Daria Anderson',
  'Josh Mosse-Robinson', 
  'Joshua Wooley',
  'Michael Sun'
];

// Ensure images directory exists
const imagesDir = path.join(__dirname, '../public/images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Generate placeholder images
teamMembers.forEach(member => {
  const filename = member.toLowerCase().replace(/ /g, '-') + '.svg';
  const filepath = path.join(imagesDir, filename);
  const svg = createSVGPlaceholder(member);
  
  fs.writeFileSync(filepath, svg);
  console.log(`Generated placeholder for ${member}: ${filename}`);
});

console.log('All placeholder images generated successfully!'); 