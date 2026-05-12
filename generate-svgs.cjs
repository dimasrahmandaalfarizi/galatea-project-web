const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public', 'posters');
if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
}

const svgs = [
  // 1. Organik (Leaf / Nature)
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" fill="none">
    <rect width="400" height="500" fill="transparent"/>
    <path d="M200 400C200 400 100 300 100 200C100 100 200 50 200 50C200 50 300 100 300 200C300 300 200 400 200 400Z" fill="#86efac" opacity="0.8"/>
    <path d="M200 50V400" stroke="#166534" stroke-width="8" stroke-linecap="round"/>
    <path d="M200 250L130 180" stroke="#166534" stroke-width="8" stroke-linecap="round"/>
    <path d="M200 300L260 240" stroke="#166534" stroke-width="8" stroke-linecap="round"/>
  </svg>`,

  // 2. Anorganik (Recycle Symbol / Arrows)
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" fill="none">
    <rect width="400" height="500" fill="transparent"/>
    <path d="M150 150L250 150L200 250Z" fill="#93c5fd" opacity="0.8"/>
    <path d="M200 350L100 200L150 150Z" fill="#60a5fa" opacity="0.7"/>
    <path d="M200 350L300 200L250 150Z" fill="#3b82f6" opacity="0.6"/>
    <circle cx="200" cy="250" r="120" stroke="#1e3a8a" stroke-width="12" stroke-dasharray="40 20" fill="none"/>
  </svg>`,

  // 3. B3 (Hazard / Warning)
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" fill="none">
    <rect width="400" height="500" fill="transparent"/>
    <path d="M200 100L350 350H50L200 100Z" fill="#fca5a5" stroke="#7f1d1d" stroke-width="16" stroke-linejoin="round"/>
    <circle cx="200" cy="280" r="15" fill="#7f1d1d"/>
    <path d="M200 180V240" stroke="#7f1d1d" stroke-width="16" stroke-linecap="round"/>
  </svg>`,

  // 4. Kompos (Dirt / Layers)
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" fill="none">
    <rect width="400" height="500" fill="transparent"/>
    <rect x="100" y="250" width="200" height="150" rx="10" fill="#6ee7b7" opacity="0.8"/>
    <rect x="120" y="200" width="160" height="50" rx="10" fill="#34d399" opacity="0.9"/>
    <path d="M150 150C150 100 250 100 250 150" stroke="#064e3b" stroke-width="12" stroke-linecap="round"/>
    <circle cx="200" cy="300" r="20" fill="#064e3b"/>
    <circle cx="160" cy="340" r="15" fill="#064e3b"/>
    <circle cx="240" cy="350" r="12" fill="#064e3b"/>
  </svg>`,

  // 5. Bank Sampah (Coin / Growth)
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" fill="none">
    <rect width="400" height="500" fill="transparent"/>
    <circle cx="200" cy="250" r="120" fill="#c4b5fd" opacity="0.8"/>
    <circle cx="200" cy="250" r="80" stroke="#312e81" stroke-width="12"/>
    <path d="M200 120V380" stroke="#312e81" stroke-width="16" stroke-linecap="round"/>
    <path d="M150 200H250" stroke="#312e81" stroke-width="16" stroke-linecap="round"/>
    <path d="M150 300H250" stroke="#312e81" stroke-width="16" stroke-linecap="round"/>
  </svg>`,

  // 6. Stop Buang Sampah (Cross / Bin)
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500" fill="none">
    <rect width="400" height="500" fill="transparent"/>
    <path d="M120 150L280 150L260 380H140L120 150Z" fill="#fdba74" opacity="0.8"/>
    <rect x="150" y="120" width="100" height="30" rx="5" fill="#7c2d12"/>
    <path d="M100 100L300 400" stroke="#7c2d12" stroke-width="24" stroke-linecap="round"/>
    <path d="M300 100L100 400" stroke="#7c2d12" stroke-width="24" stroke-linecap="round"/>
  </svg>`
];

svgs.forEach((svg, index) => {
  fs.writeFileSync(path.join(dir, (index + 1) + '.svg'), svg.trim());
  console.log('Created ' + (index + 1) + '.svg');
});
