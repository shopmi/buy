import { faker } from "@faker-js/faker";

const types = [
  { id: "camiseta", name: "Camiseta" },
  { id: "moleton", name: "Moleton" },
  { id: "caneca", name: "Caneca" },
  { id: "almofada", name: "Almofada" },
  { id: "quadro", name: "Quadro" },
];

const tags = [
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

const flags = [
  { id: "limited", name: "Limitado", color: "teal" },
  { id: "promo", name: "Promoção", color: "red" },
  { id: "new", name: "New", color: "blue" },
];

const products = Array.from({ length: 100 }, () => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  price: parseFloat(faker.commerce.price({ min: 10, max: 1000, dec: 2 })),
  description: faker.commerce.productDescription(),
  image: faker.image.urlLoremFlickr({ category: "fashion" }),
  types: faker.helpers.arrayElements(
    types.map((t) => t.id),
    { min: 1, max: 2 }
  ),
  tags: faker.helpers.arrayElements(
    tags.map((t) => t.id),
    { min: 1, max: 3 }
  ),
  flags: faker.helpers.arrayElements(
    flags.map((f) => f.id),
    { min: 0, max: 1 }
  ),
}));

export default {
  taxonomy: {
    types,
    tags,
    flags,
  },
  products,
};
