export class PaymentService {
  constructor(public amount: number, public isDeposit: boolean) {}

  makePayment(): void {
    console.log(`Payment of $${this.amount} processed.`);
  }

  refundPayment(): void {
    console.log(`Refund of $${this.amount} processed.`);
  }
}
