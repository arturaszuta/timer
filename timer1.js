const beep = function(seconds) {
  if (seconds >= 0 && !isNaN(seconds)) {
    setTimeout(() => process.stdout.write("."), seconds * 1000);
  }
};

let args = process.argv.splice(2);

for (let arg of args) {
  beep(arg);
}
