import { NumberListReplacer } from "./Classes/NumberListReplacer";
import { FizzBuzzRule, FizzRule, BuzzRule, EvenNumberRule } from "./Rules/Rule";

const fizzBuzz = new NumberListReplacer();
fizzBuzz.addRule(new FizzBuzzRule());
fizzBuzz.addRule(new FizzRule());
fizzBuzz.addRule(new BuzzRule());

const result = fizzBuzz.generate(20);
console.log(result.join(", "));


// ex. replace all even numbers with a 'text'
const evenNumberReplacer = new NumberListReplacer();
evenNumberReplacer.addRule(new EvenNumberRule());
const result2 = evenNumberReplacer.generate(100);
console.log(result2.join(", "));