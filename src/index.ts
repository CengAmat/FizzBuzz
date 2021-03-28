import { NumberListReplacer } from "./Classes/NumberListReplacer";
import { FizzBuzzRule, FizzRule, BuzzRule } from "./Rules/Rule";

const fizzBuzz = new NumberListReplacer();
fizzBuzz.addRule(new FizzBuzzRule());
fizzBuzz.addRule(new FizzRule());
fizzBuzz.addRule(new BuzzRule());

const result = fizzBuzz.generate(20);
console.log(result.join(", "));
