import normas from './normas/normasDeUso';
import IAgenda from "./interfaces/IAgenda";
import IFutebol from "./interfaces/IFutebol";
import Quadra from "./Quadra";

export default class QuadraFutebol extends Quadra {
  // busca os dados da quadra referenciada
  public futebolData: IFutebol = normas.futebol;

  public reservar<IFutebol>(data: Date): IAgenda<IFutebol> {
    // gerando protocolo de agendamento
    const protocolo = (Math.random() + 1).toString(30).substring(3);
    return {
      protocolo,
      data: data,
      regras: this.futebolData as IFutebol,
    };
  }
}