var uniqid = require("uniqid");
var randomBoolean = require("random-boolean");

export function messageGenerator(count) {
  const message = [];
  while (count > 0) {
    message.push({
      id: uniqid(),
      type: randomBoolean() ? "recive" : "sent",
      message: "this is a fake message",
      time: "00:00:00 am",
    });
    count--;
  }

  return message;
}
