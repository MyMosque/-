export class Prayer {
  name:string;
  start:string;
  jamaat:string;
  sunrise?:string;
  constructor(name:string, start:string, jamaat:string, sunrise?:string) {
    this.name = name;
    this.start = start;
    this.jamaat = jamaat;
    this.sunrise = sunrise;
  }
}