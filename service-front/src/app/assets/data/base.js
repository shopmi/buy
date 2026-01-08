import { faker } from "@faker-js/faker";
import _ from "lodash";

const taxonomy = {};

taxonomy.types = [
  { id: "camiseta", name: "Camiseta" },
  { id: "moleton", name: "Moleton" },
  { id: "caneca", name: "Caneca" },
  { id: "almofada", name: "Almofada" },
  { id: "quadro", name: "Quadro" },
];

taxonomy.tags = [
  { id: "filme", name: "Filme" },
  { id: "cantor", name: "Cantor(a)" },
  { id: "banda", name: "Banda" },
  { id: "diretor", name: "Diretor" },
  { id: "pintor", name: "Pintor" },
  { id: "jogo", name: "Jogo" },
  { id: "livro", name: "Livro" },
  { id: "anime", name: "Anime" },
  { id: "quadrinho", name: "Quadrinho" },
];

taxonomy.flags = [
  { id: "limited", name: "Limitado", color: "teal" },
  { id: "promo", name: "Promoção", color: "red" },
  { id: "new", name: "Novo", color: "blue" },
];

const products = Array.from({ length: 100 }, () => {
  const product = {
    id: faker.string.uuid(),
    name: faker.commerce.productName(),
    price: parseFloat(faker.commerce.price({ min: 10, max: 1000, dec: 2 })),
    description: faker.commerce.productDescription(),
    image: faker.image.urlLoremFlickr({ category: "fashion" }),
  };

  for (const attr in taxonomy) {
    const ids = taxonomy[attr].map((tax) => tax.id);
    product[attr] = _.sampleSize(ids, _.random(1, ids.length - 2));
  }

  return product;
});

export default {
  taxonomy,
  products,
};
