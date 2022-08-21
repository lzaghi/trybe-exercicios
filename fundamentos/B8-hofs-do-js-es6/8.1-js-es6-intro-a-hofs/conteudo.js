const acordar = () => 'Acordando!!';

const cafe = () => 'Bora tomar café!!';

const dormir = () => 'Partiu dormir!!';

const doingThings = (callback) => console.log(callback());

doingThings(acordar)
doingThings(cafe)
doingThings(dormir)

