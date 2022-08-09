const { Hardware, getAllWindows, sleep, GlobalHotkey } = require(`keysender`);

const win = getAllWindows().find(({ title }) => title == `World of Warcraft`);

const { keyboard, mouse, workwindow } = new Hardware(win.handle)

workwindow.setForeground();
sleep(250);

for(let angle = 0;;angle += 0.25) {
  mouse.move(Math.cos(angle) * 10, Math.sin(angle) * 10);
  sleep(10);
}
