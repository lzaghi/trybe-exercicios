use('exercises');

// db.movies.insertMany(
//   [{
//   "title": "Batman",
//   "category": [ "action", "adventure" ],
//   "imdbRating": 7.6,
//   "budget": 35
// },
// {
//   "title": "Godzilla",
//   "category": [ "action", "adventure", "sci-fi" ],
//   "imdbRating": 6.6
// },
// {
//   "title": "Home Alone",
//   "category": [ "family", "comedy" ],
//   "imdbRating": 7.4
// }]
// )

db.movies.find()

// Altere o imdbRating para 7.7 no filme Batman.
db.movies.updateOne(
  { title: 'Batman' },
  { $set: {imdbRating: 7.7} }
)

// Altere budget para 1 no filme Godzilla.
db.movies.updateOne(
  { title: 'Godzilla'},
  { $set: { budget: 1}}
)

// Altere budget para 15 e imdbRating para 5.5 no filme Home Alone.
db.movies.updateOne(
  { title: 'Home Alone'},
  { $set: { budget: 15, imdbRating: 5.5 }}
)

// Aumente em 2 o imdbRating do filme Batman.
db.movies.updateOne(
  { title: 'Batman' },
  { $inc: {imdbRating: 2} }
)

// Aumente em 5 o budget do filme Home Alone.
db.movies.updateOne(
  { title: 'Home Alone' },
  { $inc: {budget: 5} }
)

// Multiplique por 4 o imdbRating do filme Batman.
db.movies.updateOne(
  { title: 'Batman' },
  { $mul: {imdbRating: 4} }
)

// Renomeie o campo budget para estimatedBudget do filme Batman.
db.movies.updateOne(
  { title: 'Batman' },
  { $rename: { budget: 'estimatedBudget' } }
)

// Utilize o operador $min para alterar o budget para 5 do filme Home Alone.
db.movies.updateOne(
  { title: 'Home Alone' },
  { $min: { budget: 5 } }
)

// Utilize o operador $max para alterar o imdbRating para 8.6 do filme Godzilla. Além disso, altere a categoria "adventure" para "thriller" do filme Godzilla.
db.movies.updateOne(
  { title: 'Godzilla' },
  { 
    $max: { imdbRating:  8.6 },
    $set: { "category.1": 'thriller'}
  }
)

// Utilizando o operador $currentDate, crie um campo chamado lastUpdated com o tipo timestamp no filme Home Alone.
db.movies.updateOne(
  { title: 'Home Alone' },
  { $currentDate: { lastUpdated: { $type: 'timestamp' } } }
)

// Utilizando uma única operação, crie um campo chamado sequels e atribua a ele o valor 0 em todos os documentos.
db.movies.updateMany(
  {},
  { $set: { sequels: 0 }}
)

// Utilizando uma única operação, remova os campos budget e estimatedBudget em todos os documentos.
db.movies.updateMany(
  {},
  { $unset: { budget: '', estimatedBudget: '' } }
)

// Para os filmes Batman ou Home Alone, atribua a imdbRating o valor 17, caso o valor de imdbRating seja menor que 17.
db.movies.updateMany(
  { title: { $in: ['Batman', 'Home Alone'] } },
  { $max: { imdbRating: 17 } }
)

db.movies.find()