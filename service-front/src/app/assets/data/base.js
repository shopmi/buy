import { faker } from "@faker-js/faker";

const products = Array.from({ length: 30 }, () => ({
  id: faker.string.uuid(),
  name: faker.commerce.productName(),
  price: faker.commerce.price({ min: 10, max: 1000, dec: 2, symbol: "R$ " }),
  description: faker.commerce.productDescription(),
  image: faker.image.url(640, 480, "nature", true),
}));

export default {
  taxonomy: {
    types: [
      { id: "camiseta", name: "Camiseta" },
      { id: "moleton", name: "Moleton" },
      { id: "caneca", name: "Caneca" },
      { id: "almofada", name: "Almofada" },
      { id: "quadro", name: "Quadro" },
    ],
    tags: [
      { id: "filme", name: "Filme" },
      { id: "cantor", name: "Cantor(a)" },
      { id: "banda", name: "Banda" },
      { id: "diretor", name: "Diretor" },
      { id: "pintor", name: "Pintor" },
      { id: "jogo", name: "Jogo" },
      { id: "livro", name: "Livro" },
      { id: "anime", name: "Anime" },
      { id: "quadrinho", name: "Quadrinho" },
    ],
    flags: [
      { id: "limited", name: "Limitado", color: "teal" },
      { id: "promo", name: "Promoção", color: "red" },
    ],
  },

  products,
};
