const { Hardware, getAllWindows, sleep, GlobalHotkey } = require(`keysender`);

const win = getAllWindows().find(({ title }) => title == `World of Warcraft`);

const { keyboard, mouse, workwindow } = new Hardware(win.handle)

workwindow.setForeground();
sleep(250);

const text = [
  `I like to dance!`,
  `Look at my moves!!!`,
  `Im sooooo good!`,
  `DANCE DANCE DANCE!!!!`,
  `YEEEAEAAAAA`,
  `WE CAN DANCE WE CAN DANCE`
];
const action = [
  `/dance`,
  `/cry`,
  `/cheer`,
  `/laugh`,
  `/train`
];

const say = (text) => {
  keyboard.sendKey(enter);
  keyboard.printText(`/y ${text}`);
  keyboard.sendKey(enter);
};

while(true) {
  if(Math.random() * 10 < 5) {
    say(text[Math.floor(Math.random() * (text.length - 1))])
  } else {
    say(action[Math.floor(Math.random() * (action.length - 1))])
  }

  sleep(2000);
}
