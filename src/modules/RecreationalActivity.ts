// RecreationalActivity class to represent onboard activities
export class RecreationalActivity {
  constructor(
    public name: string,
    public includedInCabin: boolean,
    public additionalFee: number
  ) {}
}
