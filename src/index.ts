function getLabel(n: number): string {
    const divisibleBy3 = n % 3 === 0;
    const divisibleBy5 = n % 5 === 0;

    if (divisibleBy3 && divisibleBy5) return "fizzbuzz";
    if (divisibleBy3) return "fizz";
    if (divisibleBy5) return "buzz";
    return "";
}

for (let i = 1; i <= 100; i++) {
    const label = getLabel(i);
    console.log(label ? `${i} ${label}` : `${i}`);
}
