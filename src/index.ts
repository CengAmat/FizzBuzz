import { FizzBuzz } from "./Classes/FizzBuzz";
import { FizzBuzzRule, FizzRule, BuzzRule } from "./Rules/Rule";

const fizzBuzz = new FizzBuzz();
fizzBuzz.addRule(new FizzBuzzRule());
fizzBuzz.addRule(new FizzRule());
fizzBuzz.addRule(new BuzzRule());

const result = fizzBuzz.generate(20);

console.log(result.join(", "));