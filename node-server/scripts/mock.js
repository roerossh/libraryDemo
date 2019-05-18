const { spawn } = require('child_process');
const path = require('path');

const mockServer = spawn('node', ['index.js'], {
  cwd: path.resolve(__dirname, '../mock/')
});

mockServer.stdout.on('data', (data) => {
  console.log(`mockServer stdout: ${data}`);
});

mockServer.stderr.on('data', (data) => {
  console.log(`mockServer error: ${data}`);
});

mockServer.on('close', (code) => {
  console.log(`mockServer子进程退出码：${code}`);
});

// const devSercice = spawn('npm', ['run', 'dev'], {
//   cwd: path.resolve(__dirname, '../')
// });

const devSercice = spawn(/^win/.test(process.platform) ? 'npm.cmd' : 'npm', ['run',  'dev'], {
  cwd: path.resolve(__dirname, '../')
});

devSercice.stdout.on('data', (data) => {
  console.log(`devSercice stdout: ${data}`);
});

devSercice.stderr.on('data', (data) => {
  console.log(`devSercice stderr: ${data}`);
});

devSercice.on('close', (code) => {
  console.log(`devSercice子进程退出码：${code}`);
});
