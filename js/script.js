const links = [
    '> Opening destinyoconnor.dev...',
    '🌐 https://destinyoconnor.dev',
    '> Loading Instagram...',
    '📸 https://instagram.com/deafveloper',
    '> Accessing TikTok...',
    '🎵 https://www.tiktok.com/@deafveloper',
    '> Accessing Threads...',
    '🧵 https://www.threads.net/@deafveloper',
    '> Choose your path:',
    '> [R] Red Pill - Return to HQ',
    '> [B] Blue Pill - Dive deeper into the Matrix...'
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
      if (text === '[R] Red Pill - Return to HQ') {
        const link = document.createElement('a');
        link.href = 'index.html';
        link.textContent = text;
        link.className = 'pill-link';
        line.appendChild(link);
      } else if (text === '[B] Blue Pill - Dive deeper into the Matrix...') {
        const link = document.createElement('a');
        link.href = 'xfiles.html';
        link.textContent = text;
        link.className = 'pill-link';
        line.appendChild(link);
      } else {
        line.textContent = text;
      }
    }

    output.appendChild(line);
    index++;
    setTimeout(typeNextLine, 700); // delay between lines
  } else {
    const pills = document.getElementById('pills-container');
    if (pills) {
      pills.style.display = 'flex';
    }

    document.addEventListener('keydown', (event) => {
      const key = event.key.toUpperCase();
      if (key === 'R') {
        window.location.href = 'index.html';
      } else if (key === 'B') {
        window.location.href = 'xfiles.html';
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  typeNextLine();
});