import RuleInterface from "../Interfaces/RuleInterface";


export class FizzBuzz {
    rules: RuleInterface[] = [];

    addRule(rule: RuleInterface) {
        this.rules.push(rule);
    }

    generate(number: number) {
        const output: string[] = [];

        for (let i = 0; i < number; i++) {
            output.push(this.getReplacement(i));
        }

        return output;
    }

    getReplacement(number: number): string {
        for (const rule of this.rules) {
            if (rule.matches(number)) {
                return rule.getReplacement();
            }
        }
        return String(number);
    }
}