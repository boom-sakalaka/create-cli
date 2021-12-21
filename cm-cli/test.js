/*
 * @Author: GZH
 * @Date: 2021-12-21 10:01:46
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-21 10:04:08
 * @FilePath: \cm-cli\test.js
 * @Description:
 * commander: 命令行工具
 *download-git-repo: 用来下载远程模板
 *inquirer: 交互式命令行工具
 *ora: 显示 loading 动画
 *chalk: 修改控制台输出内容样式
 *log-symbols: 显示出 √ 或 × 等的图标
 *handlebars.js 用户提交的信息动态填充到文件中
 */
const program = require('commander');

program.usage('<command>');

program.version(require('../package').version);

program
  .command('add')
  .description('add a new template')
  .action(() => {
    require('../commands/add');
  });

program
  .command('delete')
  .description('delete a template')
  .action(() => {
    require('../commands/delete');
  });

program
  .command('list')
  .description('List the templateList')
  .action(() => {
    require('../commands/list');
  });

program
  .command('init')
  .description('init a project')
  .action(() => {
    require('../commands/init');
  });

program.parse(process.argv);
