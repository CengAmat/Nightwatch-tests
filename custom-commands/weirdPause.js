const EventEmitter = require("events");

class WeirdPause extends EventEmitter {
  command(ms, cb) {
    if (!ms || ms % 2 === 0) {
      throw Error("I am weird, I only accept odd number");
    }

    setTimeout(() => {
      this.emit("complete");
    }, ms);

    return this;
  }
}

module.exports = WeirdPause;
