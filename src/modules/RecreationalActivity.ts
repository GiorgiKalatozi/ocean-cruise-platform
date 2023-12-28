export class RecreationalActivity {
  constructor(public name: string, public description: string) {}

  getDetails(): string {
    return `${this.name}: ${this.description}`;
  }
}
