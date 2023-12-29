export class RecreationalActivity {
  constructor(public name: string, public description: string) {}

  public getDetails(): string {
    return `${this.name}: ${this.description}`;
  }

  public startActivity(): void {
    console.log(`${this.name} activity has started.`);
  }

  public endActivity(): void {
    console.log(`${this.name} activity has ended.`);
  }
}
