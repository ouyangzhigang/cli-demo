#!/usr/bin/env node
const lib = require('../../index.js');
const pacakgeInfo = require('../../package.json');

const log = console.log;
log('Hi, welcome the shark-cli demo!');

const argv = process.argv;
const command = argv[2];
const options = argv.slice(3) || [];
let [option = '', param = ''] = options;

option = option.replace('--', '');

if (command) {
  if (lib[command]) {
    lib[command]({ option, param });
  } else {
    log('无效的命令');
  }
} else {
  log('请输入命令参数');
}

// 实现参数解析 --version 和 init --name
if (command.startsWith('-')) {
  const globalOption = command.replace(/-/g, '');
  console.log(globalOption);

  if (['version', 'v'].includes(globalOption)) {
    log(`v${pacakgeInfo.version}`);
  }
}

