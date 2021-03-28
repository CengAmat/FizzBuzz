class FizzBuzz
{
  generate(number: number) {
    let output: string[] = [];
    for (let i = 1; i <= number; i++) {
        output.push(this.getReplacement(i));
    }
    return output;
  }

  getReplacement(number: number): any {
    if (number % 3 === 0 && number%5 === 0) return "FizzBuzz";
    if (number % 3 === 0) return "Fizz";
    if (number % 5 === 0) return "Buzz";
    else return number;
  }
}

const fizzBuzz = new FizzBuzz();
const result = fizzBuzz.generate(20);
console.log(result.join(", "));