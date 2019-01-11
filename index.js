const exec = require('child_process').exec;

const installProcess = exec(`curl https://raw.githubusercontent.com/solid-js/typescript-npm-starter/master/install.sh?${Date.now()} | sh`);

installProcess.stdout.pipe(process.stdout);
installProcess.stderr.pipe(process.stderr);
