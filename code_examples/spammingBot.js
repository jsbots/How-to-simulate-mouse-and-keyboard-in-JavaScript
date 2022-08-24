const { Hardware, getAllWindows, sleep, GlobalHotkey } = require(`keysender`);

const win = getAllWindows().find(({ title }) => title == `World of Warcraft`);

const { keyboard, mouse, workwindow } = new Hardware(win.handle)

workwindow.setForeground();
sleep(250);

const sayTimeFrom = 30000;
const sayTimeTo = 35000;

setTimeout(function say(){
  keyboard.sendKey(`enter`);
  keyboard.printText(`your text`);
  keyboard.sendKey(`enter`);
  setTimeout(say, sayTimeFrom + Math.random() * (sayTimeTo - sayTimeFrom));
}, sayTimeFrom + Math.random() * (sayTimeTo - sayTimeFrom));

const jumpTimeFrom = 49000;
const jumpTimeTo = 55000;

setTimeout(function say(){
  keyboard.sendKey(`space`);
  setTimeout(say, jumpTimeFrom + Math.random() * (jumpTimeTo - jumpTimeFrom));
}, jumpTimeFrom + Math.random() * (jumpTimeTo - jumpTimeFrom));
