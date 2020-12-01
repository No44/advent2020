const text = await Deno.readTextFile("input1.1.txt");
const numbersSet = new Set(text.split('\n').map(val => Number(val)));
const numbers = [...numbersSet.values()];

// Part 1
console.log("Part 1");
for (const item of numbersSet) {
    if (numbersSet.has(2020 - item)) {
        console.log(item * (2020 - item));
        break;
    }
}

// Part 2
console.log("Part 2");
outer: for (let i = 0; i < numbers.length; i++) {
    const base = numbers[i];
    for (let j = i + 1; j < numbers.length; j++) {
        const candidate = 2020 - (base + numbers[j]);
        if (numbersSet.has(candidate)) {
            console.log(candidate * base * numbers[j]);
            break outer;
        }
    }
}