const m3o = require("m3o/helloworld")("N2FjZWZjMTQtYmEzZi00ZWYyLWJiNWQtZDQyYzRlMzc5YmUw");

async function main() {
  let rsp = await m3o.helloworld.call({
    name: "John",
  });
  console.log(rsp);
}
export default main;
