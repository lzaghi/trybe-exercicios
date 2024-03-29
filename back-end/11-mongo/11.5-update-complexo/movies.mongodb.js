use('exercises')

// db.movies.drop();
// db.movies.insertMany([
//   {
//     title: "Batman",
//     category: [
//       "action",
//       "adventure",
//     ],
//     imdbRating: 7.7,
//     budget: 35,
//   },
//   {
//     title: "Godzilla",
//     category: [
//       "action",
//       "adventure",
//       "sci-fi",
//     ],
//     imdbRating: 6.6,
//     budget: 1,
//   },
//   {
//     title: "Home Alone",
//     category: [
//       "family",
//       "comedy",
//     ],
//     imdbRating: 7.4,
//   },
// ]);

// Adicione a categoria "superhero" ao filme Batman.
// db.movies.updateOne(
//   { title: 'Batman'},
//   { $push: { category: 'superhero'} }
// )

// Utilizando o modificador $each, adicione as categorias "villain" e "comic-based" ao filme Batman.
// db.movies.updateOne(
//   { title: 'Batman'},
//   { $push: { category: {
//       $each: ['villain', 'comic-based']
//     }}
//   }
// )

// Remova a categoria "action" do filme Batman.
// db.movies.updateOne(
//   { title: 'Batman'},
//   { $pop: { category: -1 }}
// );
// db.movies.updateOne(
//   { title: "Batman" },
//   { $pull: { category: "action" }}
// );

// Remova o primeiro elemento do array category do filme Batman.
// db.movies.updateOne(
//   { title: 'Batman'},
//   { $pop: { category: -1 }}
// );

// Remova o último elemento do array category do filme Batman.
// db.movies.updateOne(
//   { title: 'Batman'},
//   { $pop: { category: 1 }}
// );

// Adicione o elemento "action" ao array category do filme Batman, garantindo que esse valor não se duplique.
// db.movies.updateOne(
//   { title: 'Batman'},
//   { $addToSet: { category: 'action' }}
// );

// Adicione a categoria "90's" aos filmes Batman e Home Alone.
// db.movies.updateMany(
//   { title: { $in: ['Batman', 'Home Alone']}},
//   { $push: { category: "90's" }}
// );

// Crie um array de documentos chamado cast para o filme Home Alone com os seguintes dados:
// {
//   "actor": "Macaulay Culkin",
//   "character": "Kevin"
// },
// {
//   "actor": "Joe Pesci",
//   "character": "Harry"
// },
// {
//   "actor": "Daniel Stern"
// }
// db.movies.updateOne(
//   { title: 'Home Alone'},
//   { $push: { cast: {
//       $each: [
//         {
//           "actor": "Macaulay Culkin",
//           "character": "Kevin"
//         },
//         {
//           "actor": "Joe Pesci",
//           "character": "Harry"
//         },
//         {
//           "actor": "Daniel Stern"
//         }
//       ]
//   } }}
// );

// Adicione o campo character com o valor Marv ao array de cast em que o campo actor seja igual a Daniel Stern no filme Home Alone.
// db.movies.updateOne(
//   { title: 'Home Alone'},
//   { $set: {"cast.$[index].character": 'Marv'}},
//   { arrayFilters: [
//     { "index.actor": 'Daniel Stern' }
//   ]}
// );
// db.movies.updateOne(
//   {
//     title: "Home Alone",
//     "cast.actor": "Daniel Stern",
//   },
//   {
//     $set: { "cast.$.character": "Marv" },
//   },
// );

// Crie um array de documentos chamado cast para o filme Batman com os seguintes dados:
// {
//   "character": "Batman"
// },
// {
//   "character": "Alfred"
// },
// {
//   "character": "Coringa"
// }
// db.movies.updateOne(
//   { title: 'Batman'},
//   { $push: {
//     cast: {
//       $each: [
//         {
//           "character": "Batman"
//         },
//         {
//           "character": "Alfred"
//         },
//         {
//           "character": "Coringa"
//         }
//       ]
//     }
//   }}
// )

// Produza três querys para o filme Batman:
// Adicione o campo actor, que deve ser um array com o valor Christian Bale, ao array de cast em que o campo character seja igual a Batman;
// Adicione o campo actor, que deve ser um array com o valor Michael Caine, ao array de cast em que o campo character seja igual a Alfred;
// Adicione o campo actor, que deve ser um array com o valor Heath Ledger, ao array de cast em que o campo character seja igual a Coringa.
// db.movies.updateOne(
//   {
//     title: 'Batman',
//     "cast.character": 'Batman'
//   },
//   { $set: { "cast.$.actor": ['Christian Bale']}}
// )
// db.movies.updateOne(
//   {
//     title: 'Batman',
//     "cast.character": 'Alfred'
//   },
//   { $set: { "cast.$.actor": ['Michael Cane']}}
// )
// db.movies.updateOne(
//   {
//     title: 'Batman',
//     "cast.character": 'Coringa'
//   },
//   { $set: { "cast.$.actor": ['Heath Ledger']}}
// )

// Adicione aos atores de cast do character Batman do filme Batman os valores "Michael Keaton", "Val Kilmer" e "George Clooney", e deixe o array em ordem alfabética.
db.movies.updateOne(
  {
    title: 'Batman',
    "cast.character": 'Batman'
  },
  {
    $push: {
      "cast.$.actor": {
        $each: [
          "Michael Keaton", "Val Kilmer", "George Clooney"
        ],
        $sort: 1
      }
    }
  }
)

db.movies.find();