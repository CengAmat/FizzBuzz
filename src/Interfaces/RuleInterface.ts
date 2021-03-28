interface RuleInterface {
    matches(number: number): boolean;
    getReplacement(): string;
  }

export default RuleInterface;