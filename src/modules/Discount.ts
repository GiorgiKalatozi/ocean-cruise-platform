export class Discount {
  constructor(
    public name: string,
    public percentage: number,
    public expirationDate: Date
  ) {}

  public isStillValid(): boolean {
    const currentDate = new Date();
    return currentDate <= this.expirationDate;
  }

  public applyDiscount(price: number): number {
    if (this.isStillValid()) {
      const discountAmount = (this.percentage / 100) * price;
      return price - discountAmount;
    }
    console.log(`${this.name} discount has expired.`);
    return price;
  }

  public getDetails(): string {
    const validityStatus = this.isStillValid() ? "valid" : "expired";
    return `${this.name}: ${this.percentage}% discount (Status: ${validityStatus})`;
  }
}
