"use strict";
var FizzBuzz = /** @class */ (function () {
    function FizzBuzz() {
    }
    FizzBuzz.prototype.generate = function (number) {
        var output = [];
        for (var i = 1; i <= number; i++) {
            output.push(this.getReplacement(i));
        }
        return output;
    };
    FizzBuzz.prototype.getReplacement = function (number) {
        if (number % 3 === 0 && number % 5 === 0)
            return "FizzBuzz";
        if (number % 3)
            return "Fizz";
        if (number % 5)
            return "Buzz";
        else
            return number;
    };
    return FizzBuzz;
}());
var fizzBuzz = new FizzBuzz();
var result = fizzBuzz.generate(20);
console.log(result.join(", "));
