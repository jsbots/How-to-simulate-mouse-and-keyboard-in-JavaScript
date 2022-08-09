const { Hardware, getAllWindows, sleep, GlobalHotkey } = require(`keysender`);

const win = getAllWindows().find(({ title }) => title == `World of Warcraft`);

const { keyboard, mouse, workwindow } = new Hardware(win.handle)

workwindow.setForeground();
sleep(250);

mouse.toggle(true, `right`);
for(let x = 0; x < 175; x++) {
  mouse.move(10, 0);
  sleep(10);
}
mouse.toggle(false, `right`);
