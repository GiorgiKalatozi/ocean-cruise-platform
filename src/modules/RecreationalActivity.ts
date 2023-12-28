export class RecreationalActivity {
  constructor(public name: string, public description: string) {}

  getDetails(): string {
    return `${this.name}: ${this.description}`;
  }

  startActivity(): void {
    console.log(`${this.name} activity has started.`);
  }

  endActivity(): void {
    console.log(`${this.name} activity has ended.`);
  }
}
