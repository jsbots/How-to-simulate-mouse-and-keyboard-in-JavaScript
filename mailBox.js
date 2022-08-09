const { Hardware, getAllWindows, sleep, GlobalHotkey } = require(`keysender`);

const win = getAllWindows().find(({ title }) => title == `World of Warcraft`);

const { keyboard, mouse, workwindow } = new Hardware(win.handle)

workwindow.setForeground();
sleep(250);

mouse.moveTo(938, 414, 250);
mouse.click(`right`);
sleep(250);

const openItem = (x, y) => {
  mouse.moveTo(x, y, 250);
  mouse.click(`right`, 250);
}

const deleteItem = () => {
  mouse.moveTo(753, 666, 250);
  mouse.click(`left`, 250);
}

const confirmDelete = () => {
  mouse.moveTo(845, 233, 250);
  mouse.click(`left`, 250)
}

const coords = [
  { x: 64, y: 257 },
  { x: 64, y: 257 },
  { x: 64, y: 257 },
  { x: 64, y: 257 },
];

coords.forEach(({x, y}) => {
  openItem(x, y);
  sleep(500);
  deleteItem();
  sleep(500);
  confirmDelete();
  sleep(500);
});

new GlobalHotkey({
  key: `g`,
  action() {
    console.log(mouse.getPos());
  }
})
