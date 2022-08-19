const techList = (array, string) => {
  if (array.length === 0) {
    return "Vazio!"
  }

  let novoArray = array.sort()

  let arrayObjs = []

  for (let i = 0; i < array.length; i += 1) {
    let obj = {}

    obj.tech = novoArray[i]
    obj.name = string

    arrayObjs.push(obj);
  }
  return arrayObjs
}

module.exports = techList;