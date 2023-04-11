use('exercises');

db.heroes.countDocuments();

// Selecione todos os super-heróis com menos de 1.80m de altura. Lembre-se de que essa informação está em centímetros.
db.heroes.find({"aspects.height": {$lt: 180}})

// Retorne o total de super-heróis menores que 1.80m.
db.heroes.countDocuments({"aspects.height": {$lt: 180}})

// Retorne o total de super-heróis com até 1.80m.
db.heroes.countDocuments({"aspects.height": {$lte: 180}})

// Selecione um super-herói com 2.00m ou mais de altura.
db.heroes.findOne({"aspects.height": {$gte: 200}})

// Retorne o total de super-heróis com 2.00m ou mais.
db.heroes.countDocuments({"aspects.height": {$gte: 200}})

// Selecione todos os super-heróis que têm olhos verdes ("green").
db.heroes.find({"aspects.eyeColor": 'green'})

// Retorne o total de super-heróis com olhos azuis ("blue").
db.heroes.countDocuments({"aspects.eyeColor": 'blue'})

// Utilizando o operador $in, selecione todos os super-heróis com cabelos pretos ("black") ou carecas ("no hair").
db.heroes.find({"aspects.hairColor": {$in: ['black', 'no hair']}})

// Retorne o total de super-heróis com cabelos pretos ("black") ou carecas ("no hair").
db.heroes.countDocuments({"aspects.hairColor": {$in: ['black', 'no hair']}})

// Retorne o total de super-heróis que não tenham cabelos pretos ("black") ou não sejam carecas.
db.heroes.countDocuments({
  $nor: [
    {"aspects.hairColor": 'black'},
    {"aspects.hairColor": 'no hair'}
  ]
})
db.heroes.countDocuments({"aspects.hairColor": {$nin: ['black', 'no hair']}})

//  Utilizando o operador $not, retorne o total de super-heróis que não tenham mais de 1.80m de altura.
db.heroes.countDocuments({
  "aspects.height": { $not: { $gt: 180}}
})

// Selecione todos os super-heróis que não sejam humanos nem sejam maiores do que 1.80m.
db.heroes.find({
  $nor: [
    {race: 'Human'},
    {"aspects.height": { $gt: 180}}
  ]
})

// Selecione todos os super-heróis com 1.80m ou 2.00m de altura e que sejam publicados pela Marvel Comics.
db.heroes.find({
  $and: [
    { $or: [
      {"aspects.height": 180},
      {"aspects.height": 200}
    ]},
    {publisher: 'Marvel Comics'}
  ]
})

// Selecione todos os super-heróis que pesem entre 80kg e 100kg, sejam Humanos ou Mutantes e não sejam publicados pela DC Comics.
db.heroes.find({
  $and: [
    { $and: [
      {"aspects.weight": { $gte: 80} },
      {"aspects.weight": { $lte: 100} }
    ]},
    { $or: [
      {race: 'Human'},
      {race: 'Mutant'}
    ]},
    { publisher: { $not: { $eq: 'DC Comics'} } }
  ]
})

// Retorne o total de documentos que não contêm o campo race.
db.heroes.countDocuments({race: { $exists: false } })

// Retorne o total de documentos que contêm o campo hairColor.
db.heroes.countDocuments({"aspects.hairColor": { $exists: true } })

// Remova apenas um documento publicado pela Sony Pictures.
db.heroes.deleteOne({ publisher: 'Sony Pictures'})

//  Remova todos os documentos publicados pelo George Lucas.
db.heroes.deleteMany({ publisher: 'George Lucas'})