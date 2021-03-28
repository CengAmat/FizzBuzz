import RuleInterface from '../Interfaces/RuleInterface'

export class FizzRule implements RuleInterface {
  matches(number: number) : boolean {
    return number % 3 === 0;
  }

  getReplacement(): string {
    return "Fizz";
  }
}

export class BuzzRule implements RuleInterface {
  matches(number: number) : boolean {
    return number % 5 === 0;
  }

  getReplacement(): string {
    return "Buzz";
  }
}

export class FizzBuzzRule implements RuleInterface {
  matches(number: number) : boolean {
    return number % 3 === 0 && number % 5 === 0;
  }

  getReplacement(): string {
    return "FizzBuzz";
  }
}