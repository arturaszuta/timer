const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === '\u0003') {
    console.log('Thanks for using me, Ciao!')
    process.exit();
  }
  beep(key);
});

const beep = function(seconds) {
  if (seconds === 'b') {
    console.log('.');
  } else if (seconds >= 0 && !isNaN(seconds)) {
    console.log(`Setting timer for ${seconds} seconds...`)
    setTimeout(() => {
      process.stdout.write(".\n");
    }, seconds * 1000);
   
  }
};
