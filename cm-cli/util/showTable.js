/*
 * @Author: GZH
 * @Date: 2021-12-21 10:24:39
 * @LastEditors: GZH
 * @LastEditTime: 2021-12-21 10:24:39
 * @FilePath: \cm-cli\utils\showTable.js
 * @Description:
 */
const Table = require('cli-table');

const table = new Table({
  head: ['name', 'url'],
  style: {
    head: ['green'],
  },
});

function showTable(tempList) {
  const list = Object.keys(tempList);
  if (list.length > 0) {
    list.forEach(key => {
      table.push([key, tempList[key]]);
      if (table.length === list.length) {
        console.log(table.toString());
        process.exit();
      }
    });
  } else {
    console.log(table.toString());
    process.exit();
  }
}

exports.showTable = showTable;
