db.produtos.find({ ingredientes: {
    $all: ["picles"],
  } },
  { nome: 1, ingredientes: 1, valoresNutricionais: { $slice: 3 }, _id: 0 });