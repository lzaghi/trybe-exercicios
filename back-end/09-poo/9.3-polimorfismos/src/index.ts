import Clube from "./Clube";
import QuadraFutebol from "./QuadraFutebol";
import QuadraTenis from "./QuadraTenis";

const trybeClube = new Clube();
const quadraFutebol = new QuadraFutebol();
const quadraTenis = new QuadraTenis();

trybeClube.adicionarQuadra(quadraFutebol);
trybeClube.adicionarQuadra(quadraTenis);

const dataReserva = new Date('2023-12-31');

const reservarQuadraFutebol = trybeClube
  .buscarQuadra<QuadraFutebol>(0) // buscando a quadra de futebol a posição 0, já que ela foi a primeira a ser adicionada no array de quadras do clube
  .reservar(dataReserva); // o método reservar é da Classe QuadraFutebol, e passamos a data que queremos reservar

  console.log(reservarQuadraFutebol);

  const reservarQuadraTenis = trybeClube
  .buscarQuadra<QuadraTenis>(1) 
  .reservar(dataReserva); 
  console.log(reservarQuadraTenis);