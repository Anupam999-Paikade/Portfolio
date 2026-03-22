const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Remove the old Experience section cleanly
html = html.replace(/[\s]*<!-- Experience Section -->[\s\S]*?(?=<!-- Contact Section -->)/, '\n\n    ');

// 2. Adjust Navbar
// Remove old 'Experience' links
html = html.replace(/<a href=\"#experience\"[^>]*>Experience<\/a>\s*/g, '');

// Since the new timeline is #journey, let's check if there's already a link to it
if (!html.includes('href="#journey"')) {
  html = html.replace(/(<a href=\"#projects\"[^>]*>Projects<\/a>\s*)/g, '$1<a href="#journey" class="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors">Timeline</a>\n        ');
  html = html.replace(/(<a href=\"#projects\" class=\"mobile-link[^>]*>Projects<\/a>\s*)/g, '$1<a href="#journey" class="mobile-link text-base font-medium text-gray-700 w-full block">Timeline</a>\n      ');
}

// 3. Fix Spacing between Skills and Contact to avoid large empty gaps
html = html.replace(/id=\"skills\" class=\"py-24 bg-white relative\"/, 'id=\"skills\" class=\"pt-24 pb-12 bg-white relative\"');
html = html.replace(/id=\"contact\" class=\"py-24 bg-white relative overflow-hidden\"/, 'id=\"contact\" class=\"pt-12 pb-24 bg-white relative overflow-hidden\"');

fs.writeFileSync('index.html', html);
console.log('Successfully updated index.html avoiding large gaps and removing old experience.');
