const { Hardware, getAllWindows, sleep, GlobalHotkey } = require(`keysender`);

const win = getAllWindows().find(({ title }) => title == `World of Warcraft`);

const { keyboard, mouse, workwindow } = new Hardware(win.handle)

workwindow.setForeground();
sleep(250);

const sleepAsync = (time) => new Promise((resolve) => setTimeout(resolve, time));

const state = {
  status: false
};

const useSkill = (key, castTime = 1500) => {
  if(state.status == true) {
    keyboard.sendKey(key);
    sleep(castTime)
  }
};

const dpsRotation = async () => {
  while(state.status == true) {
     useSkill(`1`, 1370);
     useSkill(`2`);
     useSkill(`3`);
  }
};

new GlobalHotkey({
  key: `h`,
  async action() {
    state.status = !state.status;
    dpsRotation();
  }
});
