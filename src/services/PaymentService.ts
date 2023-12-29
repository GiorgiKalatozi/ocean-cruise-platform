export class PaymentService {
  constructor(public amount: number, public isDeposit: boolean) {}

  public makePayment(): void {
    console.log(`Payment of $${this.amount} processed.`);
  }

  public refundPayment(): void {
    console.log(`Refund of $${this.amount} processed.`);
  }
}
