import { IAirplane } from "./interfaces";

export default class Airplane implements IAirplane {
  fly(): void {
    console.log('Fly an airplane');
  }
}