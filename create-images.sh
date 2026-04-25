#!/bin/bash

# Create placeholder images with gradients

# Hero dunes
cat > public/images/hero-dunes.png << 'EOF'
<svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#E8A87C;stop-opacity:1" />
      <stop offset="50%" style="stop-color:#D47B5F;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8B4557;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="1200" height="800" fill="url(#grad1)"/>
  <path d="M0 500 Q300 300 600 450 T1200 350 L1200 800 L0 800 Z" fill="#C14953" opacity="0.6"/>
  <text x="600" y="750" font-family="Arial" font-size="36" fill="white" text-anchor="middle" opacity="0.7">Sahara Dunes</text>
</svg>
EOF

# Terjit Oasis
cat > public/images/terjit-oasis.png << 'EOF'
<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="oasis" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#4A90E2;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#2ECC71;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="600" height="400" fill="url(#oasis)"/>
  <text x="300" y="370" font-family="Arial" font-size="28" fill="white" text-anchor="middle" opacity="0.8">Terjit Oasis</text>
</svg>
EOF

# Ancient Ksour
cat > public/images/ancient-ksour.png << 'EOF'
<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="ksour" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#C9A876;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#8B7355;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="600" height="400" fill="url(#ksour)"/>
  <text x="300" y="370" font-family="Arial" font-size="28" fill="white" text-anchor="middle" opacity="0.8">Ancient Ksour</text>
</svg>
EOF

# Coastal Camps
cat > public/images/coastal-camps.png << 'EOF'
<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="coastal" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#5DADE2;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#F39C12;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="600" height="400" fill="url(#coastal)"/>
  <text x="300" y="370" font-family="Arial" font-size="28" fill="white" text-anchor="middle" opacity="0.8">Atlantic Coastal Camps</text>
</svg>
EOF

# Richat Structure
cat > public/images/richat-structure.png << 'EOF'
<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="richat" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#D35400;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#7D3C06;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="600" height="400" fill="url(#richat)"/>
  <circle cx="300" cy="200" r="100" fill="none" stroke="#E67E22" stroke-width="8" opacity="0.6"/>
  <circle cx="300" cy="200" r="60" fill="none" stroke="#E67E22" stroke-width="6" opacity="0.5"/>
  <text x="300" y="370" font-family="Arial" font-size="28" fill="white" text-anchor="middle" opacity="0.8">Eye of the Sahara</text>
</svg>
EOF

# Gallery images
for i in 1 2 3 4 5 6; do
cat > public/images/gallery-$i.png << EOF
<svg width="400" height="400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="g$i" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#hsl($((RANDOM % 360)), 60%, 60%);stop-opacity:1" />
      <stop offset="100%" style="stop-color:#hsl($((RANDOM % 360)), 50%, 40%);stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="400" height="400" fill="url(#g$i)"/>
  <text x="200" y="370" font-family="Arial" font-size="24" fill="white" text-anchor="middle" opacity="0.7">Gallery $i</text>
</svg>
EOF
done

echo "✅ All placeholder images created!"
