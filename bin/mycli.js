#!/usr/bin/env node
var program = require('commander');
const utils = require('../utils/index');
var inquirer = require('inquirer');

const { green, yellow, blue } = utils;

// program.option('-d, --debug', 'output extra debugging').option('-s, --small', 'small pizza size');
// program.parse(process.argv);
// if (program.debug) {
//   blue('option is debug');
// } else if (program.small) {
//   blue('option is small');
// }

const question = [
  {
    name: 'conf' /* key */,
    type: 'confirm' /* 确认 */,
    message: '是否创建新的项目？' /* 提示 */,
  },
  {
    name: 'name',
    message: '请输入项目名称？',
    when: res => Boolean(res.conf) /* 是否进行 */,
  },
  {
    name: 'author',
    message: '请输入作者？',
    when: res => Boolean(res.conf),
  },
  {
    type: 'list' /* 选择框 */,
    message: '请选择公共管理状态？',
    name: 'state',
    choices: ['mobx', 'redux'] /* 选项*/,
    filter: function (val) {
      /* 过滤 */
      return val.toLowerCase();
    },
    when: res => Boolean(res.conf),
  },
];

program
  .command('create')
  .description('create a project ')
  .action(function () {
    green('👽 👽 👽 ' + '欢迎使用mycli,轻松构建react ts项目～🎉🎉🎉');
    inquirer.prompt(question).then(answer => {
      if (answer.conf) {
        /* 创建文件 */
        create(answer);
      }
    });
  });

/* mycli start 运行项目 */
program
  .command('start')
  .description('start a project')
  .action(function () {
    green('--------运行项目-------');
  });

/* mycli build 打包项目 */
program
  .command('build')
  .description('build a project')
  .action(function () {
    green('--------构建项目-------');
  });

program.parse(process.argv);
