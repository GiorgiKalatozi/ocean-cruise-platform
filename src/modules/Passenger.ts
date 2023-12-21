import { Person } from "./Person";

export class Passenger extends Person {
  constructor(
    public name: string,
    public phoneNumber: string,
    public email: string,
    public deviceId: string
  ) {
    super(name);
  }
}
