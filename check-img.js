const fs = require('fs');

function check() {
  const files = [
    'public/adriano2.png',
    'public/capaescoladealtaperformance.png'
  ];
  for (const f of files) {
    if (fs.existsSync(f)) {
      const stats = fs.statSync(f);
      console.log(`${f} size: ${stats.size} bytes`);
    } else {
      console.log(`${f} does not exist`);
    }
  }
}

check();
