// scripts/fixPermissions.js

const { execSync } = require('child_process')

try {
  // Проверяем, что мы НЕ на Windows
  if (process.platform !== 'win32') {
    console.log('Running chmod +x for next in Unix-like environment...')
    // Ставим права на оба пути — иногда нужно именно dist/bin/next
    execSync('chmod +x node_modules/next/dist/bin/next node_modules/.bin/next')
  } else {
    console.log('Skipping chmod on Windows (no-op)')
  }
} catch (err) {
  console.error('Failed to set chmod +x:', err)
  process.exit(1)
}
