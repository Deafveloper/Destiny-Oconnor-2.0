const links = [
    '> Opening destinyoconnor.dev...',
    '🌐 https://destinyoconnor.dev',
    '> Loading Instagram...',
    '📸 https://instagram.com/deafveloper',
    '> Accessing TikTok...',
    '🎵 https://tiktok.com/@deafveloper',
    '> Accessing Threads...',
    '🧵 https://www.threads.com/@deafveloper'
  ];
let index = 0;
const output = document.getElementById('output');

function typeNextLine() {
  if (index < links.length) {
    const line = document.createElement('div');
    const text = links[index];

    const urlMatch = text.match(/https?:\/\/[^\s]+/);
    if (urlMatch) {
      const link = document.createElement('a');
      link.href = urlMatch[0];
      link.textContent = text;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      line.appendChild(link);
    } else {
      line.textContent = text;
    }

    output.appendChild(line);
    index++;
    setTimeout(typeNextLine, 1000); // delay between lines
  } else {
    const pills = document.getElementById('pills-container');
    if (pills) {
      pills.style.display = 'flex';
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.addEventListener('scroll', () => {
    if (output.childElementCount === 0) {
      typeNextLine();
    }
  });
});