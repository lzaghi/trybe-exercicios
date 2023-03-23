// ./interfaces.ts
export interface IVehicle {
  drive(): void;
  fly(): void;
}

export interface ICar {
  drive(): void
}

export interface IAirplane {
  fly(): void
}

export interface IFuturisticCar extends ICar, IAirplane { }