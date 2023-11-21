

const args = process.argv.slice(2);

for (const item of args) {
  if (item < 0 || isNaN(item)) {
    continue;
  }
  const beepTime = item * 1000;

  setTimeout(() => {
    process.stdout.write('\x07');
  }, beepTime);
}