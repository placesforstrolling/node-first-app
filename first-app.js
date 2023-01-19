const fs = require("fs");
for (let i = 0; i < 100000; i++) {
  fs.writeFileSync(`hello${i}.js`, "console.log('Hello World!')");
}
