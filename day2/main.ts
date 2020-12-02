const text = await Deno.readTextFile("input.txt");

// Part 1
let validCount = 0;
for (const line of text.split('\n')) {
    const tokens = line.split(' ');
    const [lower, upper] = tokens[0].split('-').map(x => Number(x));
    const letter = tokens[1][0];
    const password = tokens[2];
    let count = 0;
    for (const l of password) { 
        count += l === letter ? 1 : 0;
    }
    validCount += count >= lower && count <= upper ? 1 : 0;
}
console.log(validCount);

// Part 2
validCount = 0;
for (const line of text.split('\n')) {
    const tokens = line.split(' ');
    const [lower, upper] = tokens[0].split('-').map(x => Number(x));
    const letter = tokens[1][0];
    const password = tokens[2];

    validCount += (password[lower - 1] === letter) !== (password[upper - 1] === letter) ? 1 : 0;
}

console.log(validCount);

